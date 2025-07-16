import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, children }) => (
  <div className="border rounded-lg shadow p-4">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <div>{children}</div>
  </div>
);

export default Card;
