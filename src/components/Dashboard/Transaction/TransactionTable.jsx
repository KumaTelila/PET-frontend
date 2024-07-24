import React from "react";

const TransactionTable = () => {
  return (
    
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">DataTable with default features</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div
                  id="example1_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="dt-buttons btn-group flex-wrap">
                        <button
                          className="btn btn-secondary buttons-copy buttons-html5"
                          tabindex="0"
                          aria-controls="example1"
                          type="button"
                        >
                          <span>Copy</span>
                        </button>
                        <button
                          className="btn btn-secondary buttons-csv buttons-html5"
                          tabindex="0"
                          aria-controls="example1"
                          type="button"
                        >
                          <span>CSV</span>
                        </button>
                        <button
                          className="btn btn-secondary buttons-excel buttons-html5"
                          tabindex="0"
                          aria-controls="example1"
                          type="button"
                        >
                          <span>Excel</span>
                        </button>
                        <button
                          className="btn btn-secondary buttons-pdf buttons-html5"
                          tabindex="0"
                          aria-controls="example1"
                          type="button"
                        >
                          <span>PDF</span>
                        </button>
                        <button
                          className="btn btn-secondary buttons-print"
                          tabindex="0"
                          aria-controls="example1"
                          type="button"
                        >
                          <span>Print</span>
                        </button>
                        <div className="btn-group">
                          <button
                            className="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis"
                            tabindex="0"
                            aria-controls="example1"
                            type="button"
                            aria-haspopup="true"
                          >
                            <span>Column visibility</span>
                            <span className="dt-down-arrow"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="example1_filter" className="dataTables_filter">
                        <label>
                          Search:
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder=""
                            aria-controls="example1"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="example1"
                        className="table table-bordered table-striped dataTable dtr-inline"
                        aria-describedby="example1_info"
                      >
                        <thead>
                          <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="odd">
                            <td>Misc</td>
                            <td>NetFront 3.4</td>
                            <td>Embedded devices</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                          <tr className="even">
                            <td>Presto</td>
                            <td>Nokia N800</td>
                            <td>N800</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                          <tr className="odd">
                            <td>Presto</td>
                            <td>Opera for Wii</td>
                            <td>Wii</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                          <tr className="even">
                            <td>Presto</td>
                            <td>Opera 9.5</td>
                            <td>Win 88+ / OSX.3+</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                          <tr className="odd">
                            <td>Presto</td>
                            <td>Opera 9.2</td>
                            <td>Win 88+ / OSX.3+</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                          <tr className="even">
                            <td>Presto</td>
                            <td>Opera 7.0</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                          <tr className="odd">
                            <td>Presto</td>
                            <td>Opera 8.5</td>
                            <td>Win 95+ / OSX.2+</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                          <tr className="even">
                            <td>Presto</td>
                            <td>Opera 8.0</td>
                            <td>Win 95+ / OSX.2+</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                          <tr className="odd">
                            <td>Presto</td>
                            <td>Opera 7.5</td>
                            <td>Win 95+ / OSX.2+</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                          <tr className="even">
                            <td>Presto</td>
                            <td>Opera 9.0</td>
                            <td>Win 95+ / OSX.3+</td>
                            <td>-</td>
                            <td>A</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info"
                        id="example1_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="example1_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="example1_previous"
                          >
                            <a
                              href="#"
                              aria-controls="example1"
                              data-dt-idx="0"
                              tabindex="0"
                              className="page-link"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="example1"
                              data-dt-idx="1"
                              tabindex="0"
                              className="page-link"
                            >
                              1
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="example1"
                              data-dt-idx="2"
                              tabindex="0"
                              className="page-link"
                            >
                              2
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="example1"
                              data-dt-idx="3"
                              tabindex="0"
                              className="page-link"
                            >
                              3
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="example1"
                              data-dt-idx="4"
                              tabindex="0"
                              className="page-link"
                            >
                              4
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="example1"
                              data-dt-idx="5"
                              tabindex="0"
                              className="page-link"
                            >
                              5
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="example1"
                              data-dt-idx="6"
                              tabindex="0"
                              className="page-link"
                            >
                              6
                            </a>
                          </li>
                          <li
                            className="paginate_button page-item next"
                            id="example1_next"
                          >
                            <a
                              href="#"
                              aria-controls="example1"
                              data-dt-idx="7"
                              tabindex="0"
                              className="page-link"
                            >
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionTable;
