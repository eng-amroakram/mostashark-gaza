
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterSection from './Components/FooterSection/FooterSection'
import HeroSection from './Components/HeroSection/HeroSection'
import AboutSection from './Components/AboutSection/AboutSection'
import ServicesSection from './Components/ServicesSection/ServicesSection'
import NavbarSection from './Components/NavbarSection/NavbarSection'
import FaqSection from './Components/FaqSection/FaqSection';
import ContactPage from './Components/ContactPage/ContactPage';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import GazaGallery from './Components/GazaGallery/GazaGallery';
import BuyAndSell from './Components/BuyAndSellServices/BuyAndSell';
import PropertyEvaluation from './Components/PropertyEvaluationServices/PropertyEvaluation';
import PropertyManagement from './Components/PropertyManagementServices/PropertyManagement';
import RealEstateConsulting from './Components/RealEstateConsultingServices/RealEstateConsulting';
import PropertyDocumentation from './Components/EngineeringPlanningServices/EngineeringPlanning';
import ContractDocumentationModern from './Components/ContractDocumentationModernServices/ContractDocumentationModern';
import SurveyAndLocation from './Components/SurveyAndLocationServices/SurveyAndLocation';
import RealEstateInvestment from './Components/RealEstateInvestmentServices/RealEstateInvestment';
import DisputeResolution from './Components/DisputeResolutionServices/DisputeResolution';
import EngineeringPlanning from './Components/EngineeringPlanningServices/EngineeringPlanning';
import Construction from './Components/ConstructionServices/Construction';
import EContract from './Components/EContractServices/EContract';
import CloudStorage from './Components/CloudStorageServices/CloudStorage';
import OffersPage from './Components/OffersPage/OffersPage';






const Home =()=>{
  return(
    <>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <GazaGallery/>

    </>
  ) 
}

function App() {
  return (
    <>
    <Router>
         
     <NavbarSection/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/ServicesSection' element={<ServicesSection/>}/>
      <Route path="/FaqSection" element={<FaqSection/>} />
      <Route path='/ContactPage' element={<ContactPage/>}/>
      <Route path='/OffersPage' element={<OffersPage/>}/>
  
       <Route path="/service/1" element={<BuyAndSell />} />
        <Route path="/service/2" element={<PropertyEvaluation />} />
        <Route path="/service/3" element={<PropertyManagement/>} />
        <Route path="/service/4" element={<RealEstateConsulting/>} />
        <Route path="/service/5" element={<EngineeringPlanning/>} />
        <Route path="/service/6" element={<ContractDocumentationModern/>} />
        <Route path="/service/7" element={<SurveyAndLocation/>} />
        <Route path="/service/8" element={<RealEstateInvestment/>} />
        <Route path="/service/9" element={<DisputeResolution/>} />
        <Route path="/service/10" element={<Construction/>} />
        <Route path="/service/11" element={<EContract/>} />
        <Route path="/service/12" element={<CloudStorage/>} />
        
      </Routes>
 
       <FooterSection/>
    </Router>
    </>
  )
}

export default App
