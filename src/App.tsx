import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page3 from "./pages/Page3.tsx";
import Page5 from "./pages/Page5";
import Page2 from "./pages/Page2";
import Page1 from "./pages/Page1";
import Page4 from "./pages/Page4";

import "./components/Page3.css";
import "./components/Page5.css";
import "./components/Page2.css";
import "./components/Page1.css";
import "./components/Page4.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
