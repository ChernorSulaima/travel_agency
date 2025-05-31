import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import VisaApplications from './pages/services/VisaApplications';
import GreenCard from './pages/services/GreenCard';
import Citizenship from './pages/services/Citizenship';
import DeportationDefense from './pages/services/DeportationDefense';
import Waivers from './pages/services/Waivers';
import Appeals from './pages/services/Appeals';

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-jcas-light">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-jcas-primary"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/visa-applications" element={<VisaApplications />} />
            <Route path="services/green-card" element={<GreenCard />} />
            <Route path="services/citizenship" element={<Citizenship />} />
            <Route path="services/deportation-defense" element={<DeportationDefense />} />
            <Route path="services/waivers" element={<Waivers />} />
            <Route path="services/appeals" element={<Appeals />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
