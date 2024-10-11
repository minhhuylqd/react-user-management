import React, { useState } from 'react';
import styles from '@/styles/FilterBar.module.scss';
import { XMarkIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

type FilterBarProps = {
  onFilterChange: (filter: string) => void;
  onSortFieldChange: (field: string) => void;
  onSortOrderChange: () => void;
  resetSortOrder: () => void;
  sortField: string;
  sortOrder: 'asc' | 'desc';
};

const FilterBar: React.FC<FilterBarProps> = ({
  onFilterChange,
  onSortFieldChange,
  onSortOrderChange,
  resetSortOrder,
  sortField,
  sortOrder,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onFilterChange(e.target.value);
  };

  const clearInput = () => {
    setInputValue('');
    onFilterChange('');
    onSortFieldChange('');
    resetSortOrder();
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
      <select
        value={sortField}
        onChange={(e) => onSortFieldChange(e.target.value)}
        className={styles.sortFieldSelect}
      >
        <option value="" selected>
          Default order
        </option>
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
      </select>
      {sortField && (
        <button
          onClick={onSortOrderChange}
          className={styles.toggleSortOrderButton}
        >
          {sortOrder === 'asc' 
            ? <span className={styles.spanSortOrder}><ArrowUpIcon className={styles.arrowIcon} /> Asc </span>
            : <span className={styles.spanSortOrder}><ArrowDownIcon className={styles.arrowIcon} /> Desc </span>}
        </button>
      )}
      {(inputValue || sortField) && (
        <button className={styles.clearButton} onClick={clearInput}>
          <XMarkIcon className={styles.xmarkIcon} /> Clear filter
        </button>
      )}
    </div>
  );
};

export default FilterBar;
