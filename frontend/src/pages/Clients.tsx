import { useEffect, useState } from 'react';

interface Client {
  id: string;
  name: string;
  email?: string;
}

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetch('/api/clients')
      .then((res) => res.json())
      .then(setClients);
  }, []);

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}
