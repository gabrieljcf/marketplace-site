import { useEffect, useState } from "react";
import { Categories } from "../../components/Categories";
import { Cta } from "../../components/Cta";
import { ProductCard } from "../../components/ProductCard";
import { api } from "../../services/api";
import {
  Content,
  Line,
  ListContainer,
  ListProductsContent,
  SearchContainer,
  SearchInput,
  Title
} from "./styles";

import searchImg from "../../assets/search.svg";
import { Pagination } from "../../components/Pagination";

import { Loading } from "components/Loading";
import { useWindowDimensions } from "hooks/useWindowDimensions";
import ctaImg from "../../assets/cta-2.png";
import { ErrorContainer } from "../../components/ProductsCaroulsel/styles";
interface ProductsProps {
  _id: string;
  price: number;
  images: string[];
  name: string;
}

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Products() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [activeCategory, setActiveCategory] = useState(
    "6255e1d8aedfe58bbf1b8c31"
  );
  const [searchProduct, setSearchProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationProps>(
    {} as PaginationProps
  );
  const { width } = useWindowDimensions();
  const LIMIT = width >= 768 ? 12 : 10

  useEffect(() => {
    setLoading(true);
    api
      .get(`products?category=${activeCategory}&limit=${LIMIT}&page=${page}`)
      .then((response) => {
        setPagination({
          totalPages: response.data.totalPages,
          currentPage: response.data.currentPage,
        });
        setProducts(response.data.products);
        setLoading(false);
      }).catch(() => {
        setHasError(true)
        setProducts([]);
        setLoading(false);
      });
  }, [LIMIT, activeCategory, page, width]);

  function handleSearch() {
    setLoading(true);
    api
      .get(`products?name=${searchProduct}&limit=${LIMIT}`)
      .then((response) => {
        setPagination({
          totalPages: response.data.totalPages,
          currentPage: response.data.currentPage,
        });
        setProducts(response.data.products);
        setLoading(false);
      }).catch(() => {
        setHasError(true)
        setProducts([]);
        setLoading(false);
      });
  }

  function handleSelectCategory(categoryId: string) {
    setActiveCategory(categoryId);
    setSearchProduct("");
  }

  return (
    <main>
      <Cta
        title="Os melhores <span>produtos</span> para você"
        subtitle="Solte sua imaginação ao criar novos <span>produtos</span>"
        paragraph="Que tal trabalhar com algo novo ?
      Aqui você encontra o que há de mais novo no mercdo, para vocẽ poder inovar"
        reverse={false}
        image={ctaImg}
      />
      {products.length ? (
        <Content>
          <Line />
          <Title>Categorias</Title>
          <SearchContainer>
            <SearchInput
              type="text"
              value={searchProduct}
              placeholder="Buscar produtos"
              onChange={(event) => setSearchProduct(event.target.value)}
            />
            <button onClick={handleSearch}>
              <img src={searchImg} alt="Buscar" />
            </button>
          </SearchContainer>
          <Categories setActiveCategory={handleSelectCategory} />
          <ListContainer>
            <ListProductsContent>
              {products.map((product) => (
                <ProductCard
                  _id={product._id}
                  images={product.images}
                  name={product.name}
                  price={product.price}
                  key={product._id}
                />
              ))}
            </ListProductsContent>
            <Pagination
              setPage={setPage}
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
            />
          </ListContainer>
        </Content>
      ) : (
        <ErrorContainer>
          {
            hasError 
            ? (
              <span>Sentimos muito! parece que aconteceu um erro interno.<br/> Por favor tente mais tarde 😢</span>
            ):
            (
              <span>No momento não existe produtos cadastrados para essa categoria</span>
            )
          }
        </ErrorContainer>
      )}
       {(loading && !hasError) && <Loading />}
    </main>
  );
}
