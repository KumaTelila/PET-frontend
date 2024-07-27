import React from 'react';
import Card from './Card';
import ContentHeader from './ContentHeader';
import CardHeader from './CardHeader';
import { useQuery } from '@tanstack/react-query';
import api from '../../../services/api';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExpenses } from '../../../middleware/slices/expenseSlice';

const data1 = [
  { date: '2024-07-01', amount: 45.00, category: 'Groceries', description: 'Supermarket shopping' },
  { date: '2024-07-02', amount: 75.50, category: 'Entertainment', description: 'Movie tickets' },
  { date: '2024-07-03', amount: 150.00, category: 'Utilities', description: 'Electricity bill' },
  { date: '2024-07-04', amount: 30.00, category: 'Transport', description: 'Taxi fare' },
  { date: '2024-07-05', amount: 200.00, category: 'Rent', description: 'Monthly rent payment' },
  { date: '2024-07-06', amount: 50.00, category: 'Dining', description: 'Dinner at a restaurant' },
  { date: '2024-07-07', amount: 20.00, category: 'Miscellaneous', description: 'Stationery items' },
  { date: '2024-07-08', amount: 100.00, category: 'Groceries', description: 'Weekly grocery shopping' },
  { date: '2024-07-09', amount: 60.00, category: 'Fuel', description: 'Gasoline for car' },
  { date: '2024-07-10', amount: 40.00, category: 'Health', description: 'Pharmacy purchase' },
  // Add more data as needed
];

// fetch users expenses
// const fetchExpenses = async () => {
//   const token = localStorage.getItem('token');
//   const response = await api.get('/expenses', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };


const MainContent = () => {

  // state to store users expenses
  // const {data, error, isLoading} = useQuery({
  //   queryFn: fetchExpenses,
  //   queryKey: ['expenses'],    
  // })

  // if (isLoading) {
  //   Swal.fire({
  //     icon: "info",
  //     title: "Loading...",
  //     text: "Please wait while we load your expenses",
  //   });
  // };

  // if (error) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Error",
  //     text: error.response.data.message,
  //   });
  // };
  const dispatch = useDispatch();
  const { expenses, loading, error } = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: 'Loading...',
        text: 'Fetching expenses data...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      Swal.close();
    }

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error fetching expenses',
        text: error,
      });
    }
  }, [loading, error]);
  return (
    <>
    <div className='content-wrapper'>

    
      <ContentHeader
        title="Dashboard"
        breadcrumb="Dashboard"
      />
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Card
              headerTitle="Expenses"
              tableId="example1"
              tableClass="table table-bordered table-striped"
              data={expenses}
            />
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default MainContent;
