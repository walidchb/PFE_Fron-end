import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import SignDelivery from "./components/Sign/SignDelivery";
import Commande from "./components/Commande/Commande";
import PrincipalPage from "./components/PrincipalPage/PrincipalPage";
import Sign from "./components/Sign/Sign";
import ProductView from "./components/Products/ProductView/ProductView";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import NavBar from "./components/Navbar/NavBar";
import PrincipalHome from "./components/PrincipalPage/principalHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/signdelivery" element={<SignDelivery />} />
        <Route path="/cmd" element={<Commande />} />
        <Route path="/Pracipal" element={<PrincipalPage />} />
        <Route path="/:id" element={<ProductView />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
