import React from 'react';
import UserCard from '@/components/UserCard';
import { useFetchUsers } from './hooks/useFetchUsers';

const App: React.FC = () => {
  const { data: users, loading, error } = useFetchUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {users.map((user) => (
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
