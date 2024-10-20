import React from 'react';

function DivEstilizada() {
  const estilo = {
    backgroundColor: '#4CAF50', // Cor de fundo
    color: 'white',              // Cor do texto
    padding: '20px',             // Espaçamento interno
    margin: '20px',              // Margem externa
    borderRadius: '5px',         // Bordas arredondadas
    textAlign: 'center',         // Centraliza o texto
  };

  return (
    <div style={estilo}>
      <h2>Olá, este é um texto estilizado!</h2>
    </div>
  );
}

export default DivEstilizada;
