//import logo from "./logo.svg";
import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
//import Posts from "./components/Posts.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Login />

      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
