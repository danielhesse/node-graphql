import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

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
    <ul>
      {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

export default App
