
import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegPage from './components/regPage/RegPage';
import { useState } from 'react';
import MainPage from './components/mainPage/MainPage';




function App() {
  const [userName, setuserName] = useState('');
  console.log(userName);
  return (
    <div>

      <Routes>
        <Route path='/reg' element={RegPage}
        setuserName={setuserName}
        />
      <Route path='/' element = {<MainPage
      userName={userName}
      />}/>
      </Routes>
     
    </div>
  );
}

export default App;
