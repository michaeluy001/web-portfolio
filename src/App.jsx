import { Routes, Route } from "react-router-dom";
import Center from "./Components/Center"
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/Contact";
import Info from "./Components/Info";
import InfoLayout from "./Components/InfoLayout";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <div className="relative flex flex-col h-full content-center bg-gray-200 text-gray-500">
        <Header />
        <Center />
        
        <Routes>
          <Route path="/" element={<Info />} />
          <Route
            path="/aboutme"
            element={
              <InfoLayout title="The Building Blocks">
                <AboutMe />
              </InfoLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <InfoLayout title="Let's Collaborate!">
                <ContactMe />
              </InfoLayout>
            }
          />
          <Route
            path="/skills"
            element={
              <InfoLayout title="Tools of the Trade">
                <Skills />
              </InfoLayout>
            }
          />
        </Routes>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
