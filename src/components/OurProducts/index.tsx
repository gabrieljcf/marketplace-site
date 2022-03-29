import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { api } from "../../services/api";
import { ProductCard } from "../ProductCard";

import { Container } from "./styles";

import 'swiper/css';
import "swiper/css/pagination";

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
  const [activeCategory, setActiveCategory] = useState<string>("623f9859bd7ac16e735f59d0");
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
      <ul>
        {categories.map(category => (
          <li
            key={category._id}
            onClick={() => setActiveCategory(category._id)}
            className={
              category._id === activeCategory
                ? "active"
                : ""
            }
          >
            {category.name}
          </li>
        ))}
      </ul>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {
          products.map(product => (
            <SwiperSlide key={product._id}>
              <ProductCard
                _id={product._id}
                name={product.name}
                images={product.images}
                price={product.price}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
}