import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUsers from './users/AddUsers';
import EditUsers from './users/EditUsers';
import ViewUser from './users/ViewUsers';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUsers />} />
          <Route exact path="/edituser/:id" element={<EditUsers />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          
        </Routes>
       <Footer/>
      </Router>
      
    </div>
    
  );
}

export default App;
