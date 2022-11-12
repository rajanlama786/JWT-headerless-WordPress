import logo from "./logo.svg";
import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Posts from "./components/Posts.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
