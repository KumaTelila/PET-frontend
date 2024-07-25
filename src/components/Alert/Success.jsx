import React from "react";

const Success = () => {
  return (
    <div className="card card-success card-outline">
      <div className="card-header">
        <h3 className="card-title">
          <i className="fas fa-edit"></i>
          SweetAlert2 Examples
        </h3>
      </div>
      <div className="card-body">
        <button type="button" className="btn btn-success swalDefaultSuccess">
          Launch Success Toast
        </button>
        <button type="button" className="btn btn-info swalDefaultInfo">
          Launch Info Toast
        </button>
        <button type="button" className="btn btn-danger swalDefaultError">
          Launch Error Toast
        </button>
        <button type="button" className="btn btn-warning swalDefaultWarning">
          Launch Warning Toast
        </button>
        <button type="button" className="btn btn-default swalDefaultQuestion">
          Launch Question Toast
        </button>
      </div>
    </div>
  );
};

export default Success;
