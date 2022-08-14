import NotFound404 from "./components/pages/NotFound404"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Showcase from "./components/pages/Showcase"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="container mx-auto mb-12 px-3">
        <Routes>
          <Route exact path="/" element={<Showcase />}/>
          <Route path="/*" element={<NotFound404 />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
