import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router basename="/e-shop">
        <Routes>
          <Route path="checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;