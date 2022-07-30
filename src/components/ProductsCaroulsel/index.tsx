import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { ProductCard } from "../ProductCard";

import { Container, ErrorContainer } from "./styles";

import "swiper/css";
import { useWindowDimensions } from "hooks/useWindowDimensions";
interface Products {
  _id: string;
  price: number;
  images: string[];
  name: string;
}

interface HighLigthProducsProps {
  products: Products[];
  notFoundMessage: string;
}

export function ProductsCarousel({
  products,
  notFoundMessage,
}: HighLigthProducsProps) {
  const { width } = useWindowDimensions();

  return (
    <Container>
      {products.length ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={width >= 768 ? 0 : 20}
          slidesPerView={width >= 768 ? 4 : 2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard
                _id={product._id}
                name={product.name}
                images={product.images}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ErrorContainer>
          <span>{notFoundMessage}</span>
        </ErrorContainer>
      )}
    </Container>
  );
}
