import { useEffect, useState } from "react";
import { ProductsCarousel } from "../ProductsCaroulsel";
import { api } from "../../services/api";
import { Container } from "./style";

interface Products {
  _id: string;
  price: number;
  images: string[];
  name: string;
}

export function ProductsHighlight() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    api.get(`products`)
      .then(response => setProducts(response.data.products));
  }, []);

  return (
    <Container>
      <h2>Produtos em <span>destaque</span></h2>

      <ProductsCarousel 
        products={products}
        notFoundMessage="No momento não existe produtos em destaque"
      />

    </Container>
  );
}