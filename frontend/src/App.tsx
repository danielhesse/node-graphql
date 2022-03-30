import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import { NewUserForm } from './components/NewUserForm';

type User = {
  id: string;
  name: string;
}

const getUsers = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(getUsers);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <ul>
        {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <NewUserForm />
    </div>
  )
}

export default App
