import React from 'react'

const ContentHeader = ({ title, breadcrumb }) => {
    return (
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">{title}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">{breadcrumb}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  ContentHeader.propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumb: PropTypes.string.isRequired,
  };

export default ContentHeader