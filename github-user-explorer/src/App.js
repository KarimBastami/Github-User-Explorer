import NotFound404 from "./components/pages/NotFound404"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Showcase from "./components/pages/Showcase"
import UserProfile from "./components/pages/UserProfile"

import { GithubProvider } from "./components/context/github/GithubContext"
import { AlertProvider } from "./components/context/alert/AlertContext"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <GithubProvider>
      <AlertProvider>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <div className="container mx-auto mb-12 px-3">
            <Routes>
              <Route path="/*" element={<NotFound404 />}/>
              <Route path="/notfound" element={<NotFound404 />}/>
              <Route exact path="/" element={<Showcase />}/>
              <Route path="/user/:id" element={<UserProfile />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
