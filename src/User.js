import React from 'react';

function fetchMore(limit, offset) {}

export default function Environment({
  limit,
  offset,
  fields,
  subscriptions,
  skip
}) {
  return (
    <children
      fetchMore={(newLimit) =>
        fetchMore(newLimit === undefined ? limit : newLimit, offset)
      }
    />
  );
}
