import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = ({ headerTitle, tableId, tableClass, data }) => {
  return (
    <div className="card">
      <CardHeader title={headerTitle} />
      <CardBody tableId={tableId} tableClass={tableClass} data={data} />
    </div>
  );
};

export default Card;
