import './App.css';
// import ContextProvider from './components/contextProvider/ContextProvider.js';
import Cards from './components/weatherCards/Cards.js';
import { ContextProvider } from './components/contextProvider/ContextProvider.js';

function App() {



    return (
        <div className="App">
            <ContextProvider>
                adasdassdasd
                <Cards />
                <h2>fasfsfsafsa</h2>
            </ContextProvider>
        </div>
    );
}

export default App;
