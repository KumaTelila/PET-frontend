import React, { useState } from 'react';

const AddExpenseForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    category: '',
    description: '',
  });

  const categories = ['Groceries', 'Utilities', 'Entertainment', 'Transport', 'Dining', 'Miscellaneous'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Enter date"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
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
  );
};

export default AddExpenseForm;
