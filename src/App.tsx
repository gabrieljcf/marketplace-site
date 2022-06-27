import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BasketBadgeProvider } from "./hooks/useBasketBadge";
import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BasketBadgeProvider>
      <Header />
      <Router />
      <Footer />
      <GlobalStyle />
    </BasketBadgeProvider>
  );
}
