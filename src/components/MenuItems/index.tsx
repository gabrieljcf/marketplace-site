import { NavLink } from "react-router-dom";

export function MenuItems() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Produtos
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sobre
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contato
        </NavLink>
      </li>
    </ul>
  );
}
