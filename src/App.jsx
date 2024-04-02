import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="bg-white">
          <About />
        </div>

        <div className="bg-[#F1F1F0]">
          <Experience />
        </div>
        <Tech />
        <div className="bg-[#F1F1F0]">
          <Works />
        </div>

        <Feedbacks />

        <div className="relative z-0 bg-primary">
          <Contact />
          <StarsCanvas />
        </div>
        {/* <StarsCanvas /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
