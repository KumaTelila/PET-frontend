import React from "react";

const CardBody = ({ tableId, tableClass, data }) => {
  return (
    <div className="card-body">
      <table id={tableId} className={tableClass}>
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
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.amount}</td>
              <td>{row.category}</td>
              <td>{row.description}</td>
              <td className="project-actions text-right">
                <a className="btn btn-primary btn-sm m-1" href="/view/">
                  <i class="fas fa-eye"></i>
                  View
                </a>
                <a className="btn btn-info btn-sm m-1" href="/edit">
                  <i class="fas fa-pencil-alt"></i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm m-1" href="/delete">
                  <i class="fas fa-trash"></i>
                  Delete
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
  );
};

export default CardBody;
