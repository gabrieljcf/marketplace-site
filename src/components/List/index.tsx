import { Listcontainer } from "./style";

interface Items {
  _id: string;
  name: string;
}
interface ListProps {
  items: Items[];
  setActiveItem: (id: string) => void;
  activeItem: string;
}

export function List({ items, setActiveItem, activeItem }: ListProps) {
  return (
    <Listcontainer>
      {items.map(item => (
        <li
          key={item._id}
          onClick={() => setActiveItem(item._id)}
          className={
            item._id === activeItem
              ? "active"
              : ""
          }
        >
          {item.name}
        </li>
      ))}
    </Listcontainer>
  );
}