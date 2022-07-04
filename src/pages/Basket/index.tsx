import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Cta } from "../../components/Cta";
import { ErrorMessage } from "../../components/ErrorMessage";
import { CardList } from "../../components/CardList";

import ctaImg from "../../assets/cta.png";

import {
  BasketContainer,
  BasketContent,
  BasketDetails,
  CardListContainer,
  Line,
  TotalContainer,
} from "./styles";
import { Button } from "../../components/Button";
import { useBasketBadge } from "../../hooks/useBasketBadge";
import { SendInformationModal } from "../../components/SendInformationsModal";
import { convertToBRL, convertValue } from "../../utils/mask";

interface CardItem {
  _id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  quantity: number;
}

interface FormValues {
  fullName: string;
  address: string;
  typeOfPayment: string;
  paymentValue: string;
}

export function Basket() {
  const [cardItems, setCardItems] = useState<CardItem[]>([]);
  const [total, setTotal] = useState(0);
  const [isSendInformationModalOpen, setIsSendInformationModalOpen] =
    useState(false);
  const { createBasketBadge } = useBasketBadge();

  useEffect(() => {
    const items = localStorage.getItem("arte-festas-card");
    if (items) {
      const parsedItems = JSON.parse(items);
      setCardItems(parsedItems);
    }
  }, []);

  useEffect(() => {
    const totalPrice = cardItems.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);

    setTotal(totalPrice);
  }, [cardItems]);

  function handleChangeQuantity(id: string, quantity: number) {
    const newCardItems = cardItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    setCardItems(newCardItems);
    localStorage.setItem("arte-festas-card", JSON.stringify(newCardItems));
  }

  function handleRemove(id: string) {
    Swal.fire({
      title: "Atenção",
      text: "Tem certeza que deseja remover o item da sua cesta?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4983CC",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const newCardItems = cardItems.filter((item) => item._id !== id);
        setCardItems(newCardItems);

        localStorage.setItem("arte-festas-card", JSON.stringify(newCardItems));
        createBasketBadge(newCardItems.length);
      }
    });
  }

  function handleOpenSendInformationModal() {
    setIsSendInformationModalOpen(true);
  }

  function handleCloseSendInformationModal() {
    setIsSendInformationModalOpen(false);
  }

  function getMessage(values: FormValues) {
    const parseTotal = convertValue(total);
    const parsePayment = convertToBRL(values.paymentValue, 100);
    const parseItemsMessage = cardItems
      .map(
        (item) =>
          ` ${item.name}, quantidade: ${item.quantity}, valor: ${convertValue(
            item.price * item.quantity
          )}`
      )
      .join(",");

    const parsePaymentValue =
      values.paymentValue !== "0" ? `,valor para troco: ${parsePayment}` : "";

    return `Olá meu nome é ${values.fullName} e esse é o meu pedido:
      ${parseItemsMessage}, total: ${parseTotal}
      meu endereço: ${values.address},
      forma de pagamento: ${values.typeOfPayment}
      ${parsePaymentValue}
    `;
  }

  function handleSubmit(value: FormValues) {
    localStorage.setItem("arte-festas-card", JSON.stringify([]));
    handleCloseSendInformationModal();
    setCardItems([]);
    createBasketBadge(0);
    const message = getMessage(value);
    window.open(`https://wa.me/5577777777777?text=${message}`, "_blank");
  }

  return (
    <BasketContainer>
      <Cta
        title="Conheça a Nossa História"
        subtitle="Com mais de 10 anos de mercado"
        paragraph="A arte festas tem se dedicado a trazer qualidade e melhores preços ao mercado de festas e intretenimento, o nosso compromisso é com o melhor para os nossos clientes"
        reverse={true}
        image={ctaImg}
      />

      <BasketContent>
        <h2>Minha Cesta</h2>
        <Line />
        {cardItems.length > 0 ? (
          <>
            <BasketDetails>
              <CardListContainer>
                {cardItems.map((item) => (
                  <CardList
                    key={item._id}
                    product={item}
                    onChangeQuantity={handleChangeQuantity}
                    onRemove={handleRemove}
                  />
                ))}
              </CardListContainer>
              <TotalContainer>
                <h3>Total</h3>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
                </p>
                <Button onClick={handleOpenSendInformationModal}>
                  Finalizar compra
                </Button>
              </TotalContainer>
            </BasketDetails>
            <SendInformationModal
              isOpen={isSendInformationModalOpen}
              onRequestClose={handleCloseSendInformationModal}
              onSubmit={handleSubmit}
            />
          </>
        ) : (
          <ErrorMessage message="Sua cesta está vazia" />
        )}
      </BasketContent>
    </BasketContainer>
  );
}
