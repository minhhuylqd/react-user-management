import React from 'react';
import styles from '@/styles/FilterBar.module.scss';

type FilterBarProps = {
  onFilterChange: (filter: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Search users by name..."
      onChange={(e) => onFilterChange(e.target.value)}
      className={styles.filterBar}
    />
  );
};

export default FilterBar;
