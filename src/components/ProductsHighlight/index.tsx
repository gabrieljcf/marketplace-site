import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ProductsCarousel } from "../ProductsCaroulsel";
import { Container } from "./style";

interface Products {
  _id: string;
  price: number;
  images: string[];
  name: string;
}

export function ProductsHighlight() {
  const [products, setProducts] = useState<Products[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    api.get(`products`)
      .then(response => setProducts(response.data.products))
      .catch(() => {
        setHasError(true)
      });
  }, []);

  return (
    <Container>
      <h2>Produtos em <span>destaque</span></h2>

      <ProductsCarousel 
        products={products}
        notFoundMessage={
          hasError 
          ? "Sentimos muito! parece que aconteceu um erro interno. Por favor tente mais tarde 😢" 
          : "No momento não existe produtos em destaque"
        }
      />

    </Container>
  );
}