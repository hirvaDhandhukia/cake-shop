import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    // now how does our provider component know about our redux store? we specify it as a prop
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
