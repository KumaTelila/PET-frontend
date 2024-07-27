import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import api from "../../../services/api";
import Swal from "sweetalert2";

const addExpense = async (expenseData) => {
  const response = await api.post("/add-expense", expenseData);
  return response.data;
};

const AddExpenseForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "",
    description: "",
  });

  const [categories, setCategories] = useState([
    "Groceries",
    "Utilities",
    "Entertainment",
    "Transport",
    "Dining",
    "Miscellaneous",
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddNewCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
      setIsModalOpen(false);
    }
  };

  const mutatuion = useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Expense added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setFormData({
        date: "",
        amount: "",
        category: "",
        description: "",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutatuion.mutate(formData);
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
          <ul className="navbar nav">
            <li className="nav-item mr-4">
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
            </li>
            <li className="nav-item ">
              <button
                className="btn btn-primary btn-sm m-1"
                type="button"
                onClick={() => setIsModalOpen(true)}
              >
                <i className="m-1 fas fa-plus"></i>
                Add New Category
              </button>
            </li>
          </ul>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Category</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="newCategory">New Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="newCategory"
                    value={newCategory}
                    onChange={handleNewCategoryChange}
                    placeholder="Enter new category"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddNewCategory}
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddExpenseForm;
