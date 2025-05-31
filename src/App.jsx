import { Routes, Route } from "react-router-dom";
import Center from "./Components/Center"
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/Contact";
import Info from "./Components/Info";
import InfoLayout from "./Components/InfoLayout";


function App() {
  return (
    <>
      <div className="   content-center ">
        <Header />
        <Center />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route
            path="/aboutme"
            element={
              <InfoLayout>
                <AboutMe />
              </InfoLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <InfoLayout>
                <ContactMe />
              </InfoLayout>
            }
          />
          <Route
            path="/skills"
            element={
              <InfoLayout>
                <Skills />
              </InfoLayout>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
