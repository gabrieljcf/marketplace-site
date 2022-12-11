import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cta } from "../../components/Cta";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { SelectQuantity } from "../../components/SelectQuantity";
import { useToast } from "../../hooks/useToast";
import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { useBasketBadge } from "../../hooks/useBasketBadge";

import ctaImg from "../../assets/cta-2.png";
import { ProductImageDetails } from "../../components/ProductImageDetails";
import {
  Content,
  Line,
  PriceContainer,
  ProductContainer,
  ProductDetails,
} from "./styles";
import Swal from "sweetalert2";
import { convertValue } from "utils/mask";
interface ProductProps {
  _id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  quantity: number;
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
    if (id) {
      api.get<ProductProps>(`products/${id}`).then(({ data }) => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, [id]);

  function getBasketProducts() {
    const basketItems: ProductProps[] = JSON.parse(
      localStorage.getItem("arte-festas-card") || "[]"
    );
    return basketItems;
  }

  function saveInBasket(products: ProductProps[]) {
    localStorage.setItem("arte-festas-card", JSON.stringify(products));
  }

  function changeProductQuantityInBasket(id: string, quantity: number) {
    const newCardItems = getBasketProducts().map((item) => {
      const newQuantity = item.quantity ? item.quantity + quantity : quantity;
      if (item._id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    saveInBasket(newCardItems);

    Toast.fire({
      icon: "success",
      title: "Produto atualizado com sucesso!",
    });
  }

  function alertProductExistsInBasket(id = "", quantity: number) {
    Swal.fire({
      title: "Atenção",
      text: "Esse produto já foi adicionado a sua cesta, deseja adicionar a quantidade atual?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4983CC",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        changeProductQuantityInBasket(id, quantity);
      }
    });
  }

  function addNewBasketProduct(product?: ProductProps) {
    if (!product) return;
    const parseProduct = { ...product, quantity };
    const basketItems = [...getBasketProducts(), parseProduct];
    localStorage.setItem("arte-festas-card", JSON.stringify(basketItems));
    createBasketBadge(basketItems.length);
    Toast.fire({
      icon: "success",
      title: "Produto adicionado a cesta com sucesso!",
    });
  }

  function handleAddToCart() {
    const existsProduct = getBasketProducts().find(
      (item) => item._id === product?._id
    );

    if (existsProduct) {
      alertProductExistsInBasket(product?._id, quantity);
      return;
    }

    addNewBasketProduct(product);
  }

  return (
    <>
      {loading && <Loading />}
      <Cta
        title="Os melhores <span>produtos</span> para você"
        subtitle="Solte sua imaginação ao criar novos <span>produtos</span>"
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
                <p>{convertValue(product.price * quantity)}</p>
              </PriceContainer>
              <Button onClick={handleAddToCart} fullWidth>
                Comprar
              </Button>
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
