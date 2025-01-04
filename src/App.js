import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Addproduct from './Addproduct';
import './App.css';
import ContactUs from'./ContactUs';
import Login from './Login';
import Register from './Register';
import Viewproduct from './Viewproduct';
import Hw from './Hw';
import Product from './View'
import Practice from'./Practice'
import New10 from'./Context'
import Api2 from './Api2';
import Product2   from './View2';
import Api from './Api';
import View2 from './View2';
import View from './View';
import Hello from './Hello';
import Hello1 from './Hello1';
import Txt1 from './Txt1';





function App() {
  
  return<>

  <BrowserRouter>
  <Routes>

<Route path='api'element={<Api/>}/>
<Route path='View/:id'element={<View/>}/>
<Route path='api2'element={<Api2/>}/>
<Route path='View-view/:id'element={<View2/>}/>
<Route path='store-view/:id'element={<Hello/>}/>


<Route path='image'element={<Practice/>}/>
<Route path='neww'element={<New10/>}/>
<Route path='txt'element={<Txt1/>}/>




  </Routes>
  </BrowserRouter>
  
  </>
}

export default App;
