import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cta } from "../../components/Cta";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";

import ctaImg from "../../assets/cta-2.png";
import { ProductImageDetails } from "../../components/ProductImageDetails";
import {
  Content,
  Line,
  PriceContainer,
  ProductContainer,
  ProductDetails,
} from "./styles";
import { SelectQuantity } from "../../components/SelectQuantity";
import { useToast } from "../../hooks/useToast";
import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { useBasketBadge } from "../../hooks/useBasketBadge";

interface ProductProps {
  _id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
}

export function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { createBasketBadge } = useBasketBadge();
  const Toast = useToast();

  useEffect(() => {
    setLoading(true);
    api.get(`products/${id}`).then((response) => {
      setProduct(response.data);
      setLoading(false);
    });
  }, [id]);

  function handleAddToCart() {
    const parseProduct = { ...product, quantity };
    const items = JSON.parse(localStorage.getItem("arte-festas-card") || "[]");
    const basketItems = [...items, parseProduct];
    localStorage.setItem("arte-festas-card", JSON.stringify(basketItems));
    createBasketBadge(basketItems.length);

    Toast.fire({
      icon: "success",
      title: "Produto adicionado a cesta com sucesso!",
    });
  }

  return (
    <>
      {loading && <Loading />}

      <Cta
        title="Os melhores produtos para você"
        subtitle="Solte sua imaginação ao criar novos produtos"
        paragraph="Que tal trabalhar com algo novo ?
      Aqui você encontra o que há de mais novo no mercdo, para vocẽ poder inovar"
        reverse={false}
        image={ctaImg}
      />

      {product && (
        <Content>
          <ProductContainer>
            <ProductImageDetails images={product.images} />
            <Line />

            <ProductDetails>
              <h2>{product.name}</h2>
              <p>{product.description}</p>

              <PriceContainer>
                <SelectQuantity quantity={quantity} setQuantity={setQuantity} />
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price * quantity)}
                </p>
              </PriceContainer>

              <Button onClick={handleAddToCart}>Adicionar a cesta</Button>
            </ProductDetails>
          </ProductContainer>

          {product.description && (
            <Accordion title="Detalhes">
              <p>{product.description}</p>
            </Accordion>
          )}
        </Content>
      )}
    </>
  );
}
