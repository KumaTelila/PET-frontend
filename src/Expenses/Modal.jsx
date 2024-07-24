import React from "react";
import AddExpenseForm from "./AddForm";

const Modal = () => {
  return (
    <div className="modal fade" id="modal-default">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add New Expense</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
