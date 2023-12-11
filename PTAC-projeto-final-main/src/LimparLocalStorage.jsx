import React from 'react';

const LimparLocalStorage = () => {
  const limparLocalStorage = () => {
    localStorage.clear();
    console.log('Local Storage limpo.');
  };

  return (
    <div>
      <button onClick={limparLocalStorage}>Limpar Local Storage</button>
    </div>
  );
};

export default LimparLocalStorage;
