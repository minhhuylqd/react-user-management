import React, { useState } from 'react';
import styles from '@/styles/FilterBar.module.scss';
import { XMarkIcon } from '@heroicons/react/24/outline';

type FilterBarProps = {
  onFilterChange: (filter: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onFilterChange(e.target.value);
  };

  const clearInput = () => {
    setInputValue('');
    onFilterChange('');
  };

  return (
    <div className={styles.filterBarContainer}>
      <input
        type="text"
        placeholder="Search users by name..."
        value={inputValue}
        onChange={handleInputChange}
        className={styles.filterBar}
      />
      {inputValue && (
        <button className={styles.clearButton} onClick={clearInput}>
          <XMarkIcon className={styles.xmarkIcon} />
        </button>
      )}
    </div>
  );
};

export default FilterBar;
