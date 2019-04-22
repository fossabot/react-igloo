import React from 'react';
import Client from 'igloo.js';

export default async function Igloo({
  children,
  fields,
  subscriptions,
  skip,
  bearer
}) {
  if (skip) {
    return <children />;
  } else {
    let iglooClient;

    if (bearer) {
      iglooClient = new Client(bearer);
    } else {
      iglooClient = new Client();
    }

    let user = { id: await iglooClient.query.user.id };

    if (fields.includes('name')) {
      user = {
        ...user,
        name: await iglooClient.query.user.name
      };
    }

    return <children client={iglooClient} user={user} />;
  }
}
