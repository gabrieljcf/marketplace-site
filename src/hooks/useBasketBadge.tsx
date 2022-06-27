import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";


interface BasketBadgeProviderProps {
  children: ReactNode;
}

interface BasketBadgeContextData {
  badge: number;
  createBasketBadge: (badge: number) => Promise<void>;
}

const BasketBadgeContext = createContext<BasketBadgeContextData>(
  {} as BasketBadgeContextData
);

export function BasketBadgeProvider({ children }: BasketBadgeProviderProps) {
  const [badge, setBadge] = useState(0);

  useEffect(() => {
    const items = localStorage.getItem("arte-festas-card");
    if (items) {
      const parsedItems = JSON.parse(items);
      setBadge(parsedItems.length);
    }
  }, []);

  async function createBasketBadge(badgeValue: number) {
    setBadge(badgeValue);
  }

  return (
    <BasketBadgeContext.Provider value={{ badge, createBasketBadge }}>
      {children}
    </BasketBadgeContext.Provider>
  );
}

export function useBasketBadge() {
  const context = useContext(BasketBadgeContext);

  return context;
}
