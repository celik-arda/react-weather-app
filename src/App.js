import './App.css';
import Form from './components/form/Form';
import Cards from './components/weatherCards/Cards';
import { ContextProvider } from './components/contextProvider/ContextProvider';

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
