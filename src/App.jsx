import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Dictionary from "./pages/Dictionary"
import SignIn from "./pages/SignIn"
import SendNews from "./pages/SendNews"

function App() {

  return (
    <>
      <div className="background">
        <BrowserRouter>
          <div className="md:container mx-auto min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="legal-dictionary" element={<Dictionary />} />
              <Route path="/forum" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/send-news" element={<SendNews />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter >
      </div>
    </>
  )
}

export default App
