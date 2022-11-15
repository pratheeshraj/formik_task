

import { BrowserRouter as Router, Link} from 'react-router-dom';
import {Routes,Route  } from 'react-router-dom';
import Addstudent from './Addstudent';



import './App.css';
import Edit from './Edit';
import Table from './Table';
import View from './View';


function App() {

  


  return (
<div className='App'>
  
<Router>
<Link to={"/"}>Home</Link>
<Routes>
  <Route path='/' element={<Table/>}></Route>
</Routes>
  <Routes>
  <Route path='/add_student' element={<Addstudent/>}></Route>
</Routes>

<Routes>
  <Route path='/view/:id' element={<View/>}></Route>
</Routes>
<Routes>
  <Route path='/edit/:id' element={<Edit/>}></Route>
</Routes>
</Router>
</div>

  );
}

export default App;
