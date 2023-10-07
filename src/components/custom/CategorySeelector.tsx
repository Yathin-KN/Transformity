import { CategorySelectorProps } from '@/lib/types';
import React from 'react';

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategories,
  onCategoryToggle,
}) => {
  return (
    <div>
      <h2>Categories</h2>
      <div className='flex'>
      {categories && categories.map((category) => {
        return <div key={category.categoryId} className='flex flex-wrap'>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryToggle(category)}
          />
          {category.categoryName}
        </div>
})}
      </div>
      <h3>Selected Categories</h3>
      <ul className='flex flex-wrap'>
        {selectedCategories && selectedCategories.map((scategory) => (
          <li key={scategory.categoryId}>
            {categories.find((category) => category.categoryId === scategory.categoryId)?.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
