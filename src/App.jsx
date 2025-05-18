import { BrowserRouter } from "react-router-dom";

import { About, Contact, Services, Feedbacks, Hero, Navbar,TechSkills,Projects,Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=''>
          <Navbar />
          <Hero />
        </div >
        <About/>
        <Services />
       <TechSkills/>
        <Projects/>
    
        <Contact/>
            <Feedbacks/>
       
        <Footer/>
     
        
      </div>
    </BrowserRouter>
  );
}

export default App;
