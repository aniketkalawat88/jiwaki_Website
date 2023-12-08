import "./App.css";
import TopNavBar from "./Pages/TopNavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Beauty from './Pages/Beauty';
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import ProductDetail from "./Pages/ProductDetail";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Bottom from "./Pages/Bottom";
import ContactUs from "./Pages/ContactUs";
import BuyMembership from "./Pages/BuyMembership";


function App() {
  return (
    <div className="App">
      <TopNavBar/>


      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Beauty" element={<Beauty/>} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/BlogDetail" element={<BlogDetail/>} />
        <Route path="/ProductDetail" element={<ProductDetail/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy value='Privacy Policy'/>} />
        <Route path="/Terms&Condition" element={<PrivacyPolicy value='Term & Condition'/>} />
        <Route path="/ReturnPolicy" element={<PrivacyPolicy value='Return Policy'/>} />
        <Route path="/SupportPolicy" element={<PrivacyPolicy value='Support Policy'/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/BuyMemberShip" element={<BuyMembership/>} />
        
      </Routes>
      <Bottom/> 
    </div>
  );
}

export default App;
