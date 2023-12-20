import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import './App.css'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<div className="container"><h1>About Page</h1></div>} />
        <Route path="/menu" element={<div className="container"><h1>Menu Page</h1></div>} />
        <Route path="/reservations" element={<BookingPage />} />
        {/* <Route path="/reservations" element={<div>BookingPage</div>} /> */}
        <Route path="/order" element={<div className="container"><h1>Order Page</h1></div>} />
        <Route path="/confirmation" element={<div className="container"><h1>Confirmation Page</h1></div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
