import { Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/contact';
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
         <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;