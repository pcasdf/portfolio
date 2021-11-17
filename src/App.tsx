import CmdPrompt from './components/CmdPrompt/CmdPrompt';
import emailIcon from './assets/email.png';
import gitHubIcon from './assets/github.svg';
import linkedInIcon from './assets/linkedin.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="title">peter cho</div>
          <div className="social">
            <a href="mailto:pcho51990@gmail.com" title="email">
              <img src={emailIcon} className="icon" alt="email" />
            </a>
            <a href="https://github.com/pcho90" title="github">
              <img src={gitHubIcon} className="icon" alt="github" />
            </a>
            <a href="https://linkedin.com/in/pcho90" title="linkedin">
              <img src={linkedInIcon} className="icon" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <CmdPrompt />
    </div>
  );
}

export default App;
