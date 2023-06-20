import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Cart01 from "./components/Cart01";
import { Provider } from "react-redux";
import store from './store';



function App() {
  return (
  <div>
  <Provider store={store}>
  <BrowserRouter>
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/cart01" element={<Cart01/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  </Provider>
  </div>
  )
}

export default App;
