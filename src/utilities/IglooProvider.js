import React from 'react';
import Client from 'igloo.js';

export default async function Igloo({ token, server }) {
  const IglooContext = React.createContext(null);

  let client = new Client(token, server);

  return (
    <IglooContext.Provider value={client}>
      <children client={client} />
    </IglooContext.Provider>
  );
}
