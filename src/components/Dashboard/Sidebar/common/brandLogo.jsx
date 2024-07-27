import React from 'react';

const BrandLogo = ({brandName }) => {
  return (
    <a href="/dashboard" className="brand-link">
      <span className="brand-text font-weight-light">{brandName}</span>
    </a>
  );
};

export default BrandLogo;
