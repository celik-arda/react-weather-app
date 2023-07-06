import './App.css';
import Form from './components/form/Form.js';
import Cards from './components/weatherCards/Cards.js';
import { ContextProvider } from './components/contextProvider/ContextProvider.js';

function App() {
  return (

    <div className="App">
      <ContextProvider>
        <Form />
        <Cards />
      </ContextProvider>
    </div>
  );
}

export default App;
