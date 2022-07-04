import {
  Routes,
  Route,
} from "react-router-dom";

import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { Basket } from '../pages/Basket'
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Product } from "../pages/Product";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/Basket" element={<Basket />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}