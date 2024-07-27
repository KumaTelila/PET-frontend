import React from 'react';
import Card from './Card';
import ContentHeader from './ContentHeader';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExpenses } from '../../../middleware/slices/expenseSlice';

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
