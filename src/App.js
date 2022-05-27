import logo from './logo.svg';
import './App.css';
import useWebSocket from 'react-use-websocket';



function App() {
  const { lastJsonMessage, sendMessage } = useWebSocket('ws://localhost:8080/quotes', {
  onOpen: () => console.log(`Connected to App WS`),
  onMessage: () => {
    if (lastJsonMessage) {
      console.log(lastJsonMessage);
    }
  },
  onError: (event) => { console.error(event); },
  shouldReconnect: (closeEvent) => true,
  reconnectInterval: 3000
});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;
