import { Route, Routes } from "react-router-dom";
import Main from "./Components/Pages/Main";
import About from "./Components/Pages/About";
import NavBar from "./Components/sections/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Components/Pages/Cart";
import Footer from "./Components/sections/Footer";
import Filter from "./Components/Pages/Filter";
import "./App.css";
import ItemProvider from "./Context/ItemsContext";
import Ditals from "./Components/Pages/Ditals";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemProvider>

      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Filter/:CatName" element={<Filter />} />
          <Route path="/Ditals/:itemId" element={<Ditals/>} />
      </Routes>
      </ItemProvider>

      <Footer />
    </div>
  );
}

export default App;
