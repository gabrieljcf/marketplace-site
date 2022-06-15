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
}

export function Categories({ setActiveCategory }: CategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  useEffect(() => {
    api.get("categories").then((response) => {
      setCategories(response.data);
      setSelectedCategoryId(response?.data[0]?._id);
    });
  }, []);

  function handleSelectCategory(event: any) {
    setSelectedCategoryId(event.target.value);
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
                checked={category._id === selectedCategoryId}
                onChange={(event) => setSelectedCategoryId(event.target.value)}
              />
              <span>{category.name}</span>
            </label>
          </div>
        ))}
      </RadioGroup>
    </Aside>
  );
}
