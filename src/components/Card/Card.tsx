import React from 'react';

interface CardProps {
  title: string; // Título do card
  balance: number; // Descrição do card
}

const Card: React.FC<CardProps> = ({  title, balance }) => {
  return (
    <div className="flex border border-gray-200 p-4   flex-col  h-fit w-[150px]  bg-white rounded-lg shadow">
      <p className="text-sm font-semibold text-gray-400">{title}</p>
      <p className="text-gray-800 font-bold text-lg">{balance.toFixed(2)} R$</p>
    </div>
  );
};

export default Card;
