import React from 'react';

function Imagem() {
  const urlImagem = "https://via.placeholder.com/300"; // URL da imagem

  return (
    <div>
      <h2>Minha Imagem:</h2>
      <img src={urlImagem} alt="Imagem de exemplo" />
    </div>
  );
}

export default Imagem;
