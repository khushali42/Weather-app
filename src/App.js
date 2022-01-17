import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
    <Weather/>
    </Provider>
  );
}

export default App;
