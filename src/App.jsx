
import Navbar from './components/common/Navigation/Navbar';
import Discovery from './components/Discovery/Discovery';
import HomeMaster from './components/HomePage/HomeMaster';
import Help from './components/Help/Help';
import Stories from './components/Stories/Stories';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/common/Footer/Footer';
import Register from './components/Register/Register';
import ForgotPassword from './components/Register/fotgotPassword/ForgotPassword';
import Verification from './components/Register/fotgotPassword/Verification';
import NewPassword from './components/Register/fotgotPassword/NewPassword';
import ProductDetails from './components/Products/ProductDetails';
import Event from './components/create-event/Event';
import FirstEvent from './components/create-event/FirstEvent';
import More from './components/More/More';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomeMaster />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path='/discovery' element={<Discovery />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/firstEvent' element={<FirstEvent />} />
          <Route path='/event' element={<Event />} />
          {/* <Route path='/Blog' element={<Blog />} /> */}
          <Route path='/Help' element={<Help />} />
          <Route path='/more' element={<More />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )

}
export default App