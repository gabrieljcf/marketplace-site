import { useEffect, useState } from "react";
import { ProductsCarousel } from "../productsCaroulsel";
import { api } from "../../services/api";
import { List } from "../List";

import { Container } from "./style";

interface Categories {
  _id: string;
  name: string;
  nameSearch: string;
}

interface Products {
  _id: string;
  price: number;
  images: string[];
  name: string;
}

export function OurProducts() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("6255e1d8aedfe58bbf1b8c31");
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    api.get("categories")
      .then(response => setCategories(response.data));
  }, []);

  useEffect(() => {
    api.get(`products?category=${activeCategory}`)
      .then(response => setProducts(response.data.products));
  }, [activeCategory]);

  return (
    <Container>
      <h2>Nossos <span>Produtos</span></h2>

      <List
        items={categories}
        setActiveItem={setActiveCategory}
        activeItem={activeCategory}
      />

      <ProductsCarousel 
        products={products}
        notFoundMessage="No momento não existe produtos cadastrados para essa categoria"
      />

    </Container>
  );
}