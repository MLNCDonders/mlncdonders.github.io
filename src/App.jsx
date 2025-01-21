import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Navbar from "./screens/components/Navbar";
import Footer from "./screens/components/Footer";
import Contact from "./screens/Contact";
import People from "./screens/People";
import Publications from "./screens/Publications";
import Education from "./screens/Education";
import Research from "./screens/Research";
import News from "./screens/News";

function App() {

  return (
    <BrowserRouter basename="/">
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/people" element={<People></People>}></Route>
        <Route path="/publications" element={<Publications></Publications>}></Route>
        <Route path="/education" element={<Education></Education>}></Route>
        <Route path="/research" element={<Research></Research>}></Route>
        <Route path="/news" element={<News></News>}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
