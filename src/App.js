import logo from './logo.svg';
import './App.css';
import UsrsList from './pages/UsrsList';
import User from './pages/User';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path='/' element={<UsrsList />} />
        <Route strict exact path='/:id' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
