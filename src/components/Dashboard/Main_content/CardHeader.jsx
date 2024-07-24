import React from "react";
import PropTypes from "prop-types";

const CardHeader = ({ title }) => {
  return (
    <div className="card-header">
      <ul className="navbar nav">
        <li className="nav-item">
          <h3 className="card-title">{title}</h3>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary btn-sm m-1" href="#">
            <i class="m-1 fas fa-plus"></i>
            Add Expense
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CardHeader;
