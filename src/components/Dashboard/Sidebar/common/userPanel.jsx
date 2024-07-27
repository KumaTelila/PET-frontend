import React from 'react';

const UserPanel = ({userName }) => {
  return (
    <div className="user-panel pb-3 mb-3 d-flex">
      <div className="info">
        <a href="#" className="d-block">{userName}</a>
      </div>
    </div>
  );
};

export default UserPanel;
