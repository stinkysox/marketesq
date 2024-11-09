import "./App.css";
import BookingSection from "./components/BookingSection/BookingSection";
import Discover from "./components/Discover/Discover";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="app">
      <Header />
      <BookingSection />
      <Discover />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
