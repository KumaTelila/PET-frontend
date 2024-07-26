import React from 'react';

const Table = ({
  expenses,
  categories,
  onAddCategory,
  onAddExpense,
  onSaveChanges,
}) => {
  return (
    <div className="card">
      <div className="modal fade" id="modal-default">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Expense</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSaveChanges}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" name="date" placeholder="Enter date" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="form-control" id="amount" name="amount" placeholder="Enter amount" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <ul className="navbar nav">
                      <li className="nav-item mr-4">
                        <select className="form-control" id="category" name="category">
                          <option value="">Select category</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </li>
                      <li className="nav-item">
                        <button className="btn btn-primary btn-sm m-1" type="button" onClick={onAddCategory}>
                          <i className="m-1 fas fa-plus"></i>Add New Category
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" placeholder="Enter description"></textarea>
                  </div>
                </div>
                <div className="modal-footer justify-content-between">
                  <button type="button" className="btn btn-default" data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="card-header">
        <ul className="navbar nav">
          <li className="nav-item">
            <h3 className="card-title">Expenses</h3>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary btn-sm m-1" type="button" data-toggle="modal" data-target="#modal-default">
              <i className="m-1 fas fa-plus"></i>Add Expense
            </button>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="dt-buttons btn-group flex-wrap">
                <button className="btn btn-secondary buttons-copy buttons-html5" type="button">
                  <span>Copy</span>
                </button>
                <button className="btn btn-secondary buttons-csv buttons-html5" type="button">
                  <span>CSV</span>
                </button>
                <button className="btn btn-secondary buttons-excel buttons-html5" type="button">
                  <span>Excel</span>
                </button>
                <button className="btn btn-secondary buttons-pdf buttons-html5" type="button">
                  <span>PDF</span>
                </button>
                <button className="btn btn-secondary buttons-print" type="button">
                  <span>Print</span>
                </button>
                <div className="btn-group">
                  <button className="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis" type="button">
                    <span>Column visibility</span>
                    <span className="dt-down-arrow"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div id="example1_filter" className="dataTables_filter">
                <label>
                  Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="example1" />
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <table id="example1" className="table table-bordered table-striped dataTable dtr-inline" aria-describedby="example1_info">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                      <td>{new Date(expense.date).toLocaleDateString()}</td>
                      <td>{expense.amount}</td>
                      <td>{expense.category}</td>
                      <td>{expense.description}</td>
                      <td className="project-actions text-right">
                        <a className="btn btn-primary btn-sm m-1" href="#">
                          <i className="fas fa-eye"></i>View
                        </a>
                        <a className="btn btn-info btn-sm m-1" href="#">
                          <i className="fas fa-pencil-alt"></i>Edit
                        </a>
                        <a className="btn btn-danger btn-sm m-1" href="#">
                          <i className="fas fa-trash"></i>Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">
                Showing 1 to {expenses.length} of {expenses.length} entries
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                <ul className="pagination">
                  <li className="paginate_button page-item previous disabled" id="example1_previous">
                    <a href="#" aria-controls="example1" data-dt-idx="0" className="page-link">
                      Previous
                    </a>
                  </li>
                  <li className="paginate_button page-item active">
                    <a href="#" aria-controls="example1" data-dt-idx="1" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="paginate_button page-item next disabled" id="example1_next">
                    <a href="#" aria-controls="example1" data-dt-idx="2" className="page-link">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
