import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './Banner';
import Course from './Course';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import FullStackDevelopment from './FullStackDevelopment';
import ArtificicalIntelligence from './ArtificicalIntelligence';
import DataScienceList from './DataScienceList';
import BasicMl from './BasicMl';
import Advancedml from './Advancedml';
import Awsml from './Awsml';
import Mlai from './Mlai';
import Internediateml from './Internediateml';
import MlIdustry from './MlIdustry';
import MLforBusiness from './MLforBusiness';
import MLResearch from './MLResearch';
import MEANFSD from './MEANFSD';
import MERNFSD from './MERNFSD';
import LAMPSD from './LAMPSD';
import RUBY from './RUBY';
import Django from './Django';
import ASP from './ASP';
import BasicAI from './BasicAI';
import AdvancedAI from './AdvancedAI';
import AIwithPython from './AIwithPython';
import TensorFlow from './TensorFlow';
import NavbarComp from './NavbarComp';
import Footer from './Footer';

//Routing the components

function App() {


  return (
    <>
      <BrowserRouter>
        <div className='container-fluid'>
          <NavbarComp />
          <Banner />
          <Course />
          <div className='route-container'>
            <Routes>
              <Route path="/ml" element={<Dashboard />} />
              <Route path="/fs" element={<FullStackDevelopment />} />
              <Route path="/ai" element={<ArtificicalIntelligence />} />
              <Route path="/ds" element={<DataScienceList />} />
              <Route path="/ml/basicml" element={<BasicMl />} />
              <Route path="/ml/advanceml" element={<Advancedml />} />
              <Route path="/ml/awsml" element={<Awsml />} />
              <Route path="/ml/mlai" element={<Mlai />} />
              <Route path="/ml/intermediateml" element={<Internediateml />} />
              <Route path="/ml/mlforindustry" element={<MlIdustry />} />
              <Route path="/ml/mlforbusines" element={<MLforBusiness />} />
              <Route path="/ml/mlresearch" element={<MLResearch />} />
              <Route path="/fs/meanfsd" element={<MEANFSD />} />
              <Route path="/fs/mernfsd" element={<MERNFSD />} />
              <Route path="/fs/lampsd" element={<LAMPSD />} />
              <Route path="/fs/ruby" element={<RUBY />} />
              <Route path="/fs/django" element={<Django />} />
              <Route path="/fs/asp" element={<ASP />} />
              <Route path="/ai/basicai" element={<BasicAI />} />
              <Route path="/ai/advancedai" element={<AdvancedAI />} />
              <Route path="/ai/aiwithpython" element={<AIwithPython />} />
              <Route path="/ai/tensorflow" element={<TensorFlow />} />
            </Routes>
          </div>
          <Footer />



        </div>
      </BrowserRouter>


    </>


  )
}

export default App
