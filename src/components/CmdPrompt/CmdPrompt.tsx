import React, {useCallback, useEffect, useRef, useState} from 'react';

import './CmdPrompt.scss';

function CmdPrompt() {
  const [isCmdPromptOpen, setIsCmdPromptOpen] = useState(false);
  const [cmdPromptText, setCmdPromptText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCmdPromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCmdPromptText(e.target.value);
  };

  const closeCmdPrompt = () => {
    setIsCmdPromptOpen(false);
    setCmdPromptText('');
  };

  const handleKeys = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === '`') {
      console.log('open terminal');
    } else if (e.key === ':') {
      e.preventDefault();
      setIsCmdPromptOpen(true);
      inputRef.current?.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsCmdPromptOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeys);
    return () => {
      window.removeEventListener('keydown', handleKeys);
    };
  }, [handleKeys]);

  return (
    <div className="prompt-wrapper">
      {isCmdPromptOpen && (
        <div className="prompt-container">
          :
          <input
            ref={inputRef}
            type="text"
            className="prompt-input"
            onChange={handleCmdPromptChange}
            onBlur={closeCmdPrompt}
            value={cmdPromptText}
            spellCheck="false"
          />
        </div>
      )}
    </div>
  );
}

export default CmdPrompt;
