import React from 'react';

interface Category {
  categoryId: string;
  categoryName: string;
  postCount:number;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategories,
  onCategoryToggle,
}) => {
  return (
    <div>
      <h2>Categories</h2>
      {categories && categories.map((category) => {
        console.log("-----\n",category)
        return <div key={category.categoryId}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category.categoryId)}
            onChange={() => onCategoryToggle(category.categoryId)}
          />
          {category.categoryName}
        </div>
})}
      <h3>Selected Categories</h3>
      <ul>
        {selectedCategories && selectedCategories.map((id) => (
          <li key={id}>
            {categories.find((category) => category.categoryId === id)?.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
