import React, { useState, useEffect } from 'react';
import UserCard from '@/components/UserCard';
import { useFetchUsers } from '@/hooks/useFetchUsers';
import { type User } from '@/types/userSchema';
import FilterBar from '@/components/FilterBar';

const App: React.FC = () => {
  const { data: users, loading, error } = useFetchUsers();

  const [filteredUsers, setFilteredUsers] = useState(users);

  const [sortField, setSortField] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const sortArray = (type: string) => {
      if (!type) {
        setFilteredUsers(users);
        return;
      }

      const types: { [key: string]: keyof User } = {
        name: 'name',
        email: 'email',
      };
      const sortProperty = types[type];
      if (!sortProperty) return;

      const sorted = [...filteredUsers].sort((a, b) => {
        const valueA = a[sortProperty];
        const valueB = b[sortProperty];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          if (valueA.toLowerCase() < valueB.toLowerCase())
            return sortOrder === 'asc' ? -1 : 1;
          if (valueA.toLowerCase() > valueB.toLowerCase())
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
      });
      setFilteredUsers(sorted);
    };

    sortArray(sortField);
  }, [users, sortField, sortOrder]);

  const handleFilterChange = (filter: string) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  const handleSortFieldChange = (field: string) => {
    setSortField(field);
  };

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const resetSortOrder = () => {
    setSortOrder('asc');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <FilterBar
        onFilterChange={handleFilterChange}
        onSortFieldChange={handleSortFieldChange}
        onSortOrderChange={handleSortOrderChange}
        resetSortOrder={resetSortOrder}
        sortField={sortField}
        sortOrder={sortOrder}
      />
      {filteredUsers.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          website={user.website}
          address={`${user.address.street}, ${user.address.city}`}
        />
      ))}
    </div>
  );
};

export default App;
