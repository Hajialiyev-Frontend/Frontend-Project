import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Shop from './pages/Shop/Shop'
import Home from './assets/Home/Home';



function App() {
  return (
    <div className="min-h-screen bg-gray-50">
     
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path="/about" element={<About />} />
         <Route path='/Shop' element={<Shop />} />
      </Routes>
    </div>
  );
}   

export default App;