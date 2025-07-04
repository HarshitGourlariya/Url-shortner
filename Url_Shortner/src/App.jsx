import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MainContent from './Components/Body/Body';
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <Router>
  
      <Routes>
        <Route path='/' element={<><Navbar /><MainContent/><Footer/></>} />  
       
      </Routes>
    </Router>
  );
};



export default App;
