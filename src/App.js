import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/about/About';
import NavBar from './components/layout/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/layout/Footer';
import './Footer.css'
import HideNav from './components/hidenavbar/HideNav';
import LogIn from './components/pages/LogIn';
import Programs from './components/pages/programs/Programs';
import Register from './components/pages/register/Register';
import LandingPage from './components/layout/LandingPage';
import Admin from './components/pages/Admin';
import './register.css'
import SideBar from './components/layout/SideBar';
import ShowSideBar from './components/sidebar/ShowSideBar';
import HideFooter from './components/hidefooter/HideFooter';
import ManagePrograms from './components/pages/programs/ManagePrograms';
import EditProgram from './components/pages/programs/EditProgram';
import ManageScholar from './components/pages/scholars/ManageScholar';
import EditScholar from './components/pages/scholars/EditScholar'
import ViewScholar from './components/pages/scholars/ViewScholar'
import PendingScholar from './components/pages/scholars/PendingScholar';
import EditPending from './components/pages/scholars/EditPending'
import AddScholar from './components/pages/scholars/AddScholar'
import RegisterAdmin from './components/pages/register/RegisterAdmin'
import Profile from './components/pages/accounts/Profile';
import AccountSetting from './components/pages/accounts/AccountSetting';
import AddProgram from './components/pages/programs/AddProgram';
import Waiting from './components/pages/programs/Waiting';
import Disbursed from './components/pages/programs/Disbursed';



function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <HideNav>
            <NavBar />
          </HideNav>
          <ShowSideBar>
            <SideBar />
          </ShowSideBar>
          <LandingPage>
            <Home />
            <Programs />
            <About />
          </LandingPage>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/managePrograms" element={<ManagePrograms/>}/>
            <Route path="/editprograms/:programId" element={<EditProgram/>}/>
            <Route path="/manageScholar" element={<ManageScholar/>}/>
            <Route path="/editscholar/:scholarId" element={<EditScholar/>}/>
            <Route path="/viewscholar/:scholarId" element={<ViewScholar/>}/>
            <Route path="/pendingScholar" element={<PendingScholar/>}/>
            <Route path="/editpendingScholar/:pendingId" element={<EditPending/>}/>
            <Route path="/addscholar" element={<AddScholar/>}/>
            <Route path="/addAdmin" element={<RegisterAdmin/>}/>
            <Route path="/profile/:adminId" element={<Profile/>}/>
            <Route path="/accounts" element={<AccountSetting/>}/>
            <Route path="/addprogram" element={<AddProgram/>}/>
            <Route path="/waiting" element={<Waiting/>}/>
            <Route path="/disbursed" element={<Disbursed/>}/>
          </Routes>

          <HideFooter>
            <Footer />
          </HideFooter>
        </Router>

      </div>
    </div>
  );
}

export default App;
