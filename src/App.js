import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./global.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";
import FoodComponent from "./components/Food";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <FoodComponent />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
