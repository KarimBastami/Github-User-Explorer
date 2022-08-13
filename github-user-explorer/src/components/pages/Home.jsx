import Navbar from "../layout/Navbar"
import Footer from "./Footer"
import Showcase from "../content/Showcase"

function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />  
      <Showcase />
      <Footer />
    </div>
  )
}

export default Home