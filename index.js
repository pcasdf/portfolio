document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key === '`') {
    openTerminal();
  } else if (e.key === ':') {
    enterCmdMode();
  }
});

function openTerminal() {}

function exitCmdMode() {
  const input = document.querySelector('.input');
  input.style.display = 'none';
  input.value = '';
}

function enterCmdMode() {
  const input = document.querySelector('.input');
  input.style.display = 'block';
  input.focus();
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      exitCmdMode();
    }
    if (e.key === 'Enter') {
      console.log(e.target.value);
      exitCmdMode();
      // sendCmd();
    }
  });
  input.addEventListener('input', e => {
    if (e.target.value.length === 0) {
      exitCmdMode();
    }
  });
  input.addEventListener('focusout', exitCmdMode);
}
