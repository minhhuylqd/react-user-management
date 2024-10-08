import React, { useState, useEffect } from 'react';
import UserCard from '@/components/UserCard';
import { useFetchUsers } from './hooks/useFetchUsers';
import FilterBar from './components/FilterBar';

const App: React.FC = () => {
  const { data: users, loading, error } = useFetchUsers();

  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleFilterChange = (filter: string) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} />
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
