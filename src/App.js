import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import AnotherPage from './components/AnotherPage';
import ThemeButton from './components/ThemeButton';
import ThemeProvider from './ThemeContext';

function App() {
  return (
    <div className="App">
     <nav>
      <Link to='/'>Home</Link>
      <Link to='/anotherPage'>Another Page</Link>
     </nav>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/anotherPage' element={<AnotherPage />}></Route>
    </Routes>
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
    </div>
  );
}

export default App;
