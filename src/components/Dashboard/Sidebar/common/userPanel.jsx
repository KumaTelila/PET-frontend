import React from 'react';

const UserPanel = ({ imageUrl, userName }) => {
  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img
          src={imageUrl}
          className="img-circle elevation-2"
          alt="User Image"
        />
      </div>
      <div className="info">
        <a href="#" className="d-block">{userName}</a>
      </div>
    </div>
  );
};

export default UserPanel;
