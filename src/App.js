
import { Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/Chat/ChatPage';
import { Home } from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
     <Routes>
       {/* <Route path='/login' element={<Login/>} /> */}
       <Route path='/' element={<Home/>} />
       <Route path='/chats' element={<ChatPage/>} />
       <Route path = '*' element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;

const NotFound = ()=>{

  return (
  
  <h1>Rout Not Found.. !</h1>
  )
  

}

 