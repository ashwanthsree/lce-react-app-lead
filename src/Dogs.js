import React from 'react';
import { useDogsAddUpdate } from './hooks/useDogsAddUpdate';

export const Dogs = () => {
  const { dogs } = useDogsAddUpdate();



  return (
    <section className="Movies">
      <h2>My dogs</h2>
      {dogs.map(dog => (
       <h3>{dog.title}</h3>
      ))}
    </section>
  );
};