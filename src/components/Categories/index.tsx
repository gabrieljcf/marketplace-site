import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Aside, RadioGroup } from "./styles";

interface Category {
  _id: string;
  name: string;
  nameSearch: string;
}

interface CategoriesProps {
  setActiveCategory: (category: string) => void;
  selectedCategory: string;
}

export function Categories({
  setActiveCategory,
  selectedCategory,
}: CategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get("categories").then((response) => setCategories(response.data));
  }, []);

  function handleSelectCategory(event: any) {
    setActiveCategory(event.target.value);
  }
  return (
    <Aside>
      <RadioGroup onChange={handleSelectCategory}>
        {categories.map((category) => (
          <div key={category._id}>
            <label htmlFor={category.nameSearch}>
              <input
                type="radio"
                name="categories"
                id={category.nameSearch}
                value={category._id}
                checked={category._id === selectedCategory}
              />
              <span>{category.name}</span>
            </label>
          </div>
        ))}
      </RadioGroup>
    </Aside>
  );
}
