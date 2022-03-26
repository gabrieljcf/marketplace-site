import {
  Routes,
  Route,
} from "react-router-dom";

import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { Basket } from '../pages/Basket'
import { App } from "../App";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Basket" element={<Basket />} />
    </Routes>
  )
}