import React from 'react';

const BrandLogo = ({brandName }) => {
  return (
    <a href="index3.html" className="brand-link">
      <img
        className="brand-image img-circle elevation-3"
        style={{ opacity: 0.8 }}
      />
      <span className="brand-text font-weight-light">{brandName}</span>
    </a>
  );
};

export default BrandLogo;
