import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';

// The Coding Journey: Responsive E-Learning Education

export const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
    </main>
  );
};

export default App;
