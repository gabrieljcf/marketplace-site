import { Header } from "./components/Header";
import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Router />
      <GlobalStyle />
    </>
  );
}