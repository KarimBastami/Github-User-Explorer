import Navbar from "./Navbar"
import Footer from "./Footer"

function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />  
      <div>Content</div>
      <Footer />
    </div>
  )
}

export default Home