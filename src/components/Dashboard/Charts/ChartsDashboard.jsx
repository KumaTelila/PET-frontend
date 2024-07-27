import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
import ContentHeader from "../Main_content/ContentHeader";
import { fetchExpenses } from "../../../middleware/slices/expenseSlice"; 

const ChartsDashboard = () => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expenses);
  
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  useEffect(() => {
    // Destroy previous chart instances if they exist
    if (pieChartRef.current) {
      pieChartRef.current.destroy();
    }
    if (lineChartRef.current) {
      lineChartRef.current.destroy();
    }

    // Transform the data for pie chart (category distribution)
    const categoryData = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});
    const pieLabels = Object.keys(categoryData);
    const pieData = Object.values(categoryData);

    // Pie Chart
    const pieCtx = document.getElementById("pieChart").getContext("2d");
    pieChartRef.current = new Chart(pieCtx, {
      type: "pie",
      data: {
        labels: pieLabels,
        datasets: [
          {
            data: pieData,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
          },
        ],
      },
    });

    // Transform the data for line chart (expenses over time)
    const lineLabels = expenses.map((expense) => new Date(expense.date).toLocaleDateString());
    const lineData = expenses.map((expense) => expense.amount);

    // Line Chart
    const lineCtx = document.getElementById("lineChart").getContext("2d");
    lineChartRef.current = new Chart(lineCtx, {
      type: "line",
      data: {
        labels: lineLabels,
        datasets: [
          {
            label: "Expenses",
            data: lineData,
            fill: false,
            borderColor: "rgba(75,192,192,1)",
            tension: 0.1,
          },
        ],
      },
    });

    // Cleanup function to destroy charts on unmount
    return () => {
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }
      if (lineChartRef.current) {
        lineChartRef.current.destroy();
      }
    };
  }, [expenses]);

  return (
    <>
      <div className="content-wrapper">
        <ContentHeader title="Charts" breadcrumb="Charts" />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                {/* PIE CHART */}
                <div className="card card-danger">
                  <div className="card-header">
                    <h3 className="card-title">Category Expenses</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <canvas
                      id="pieChart"
                      style={{
                        minHeight: "250px",
                        height: "250px",
                        maxHeight: "250px",
                        maxWidth: "100%",
                        display: "block",
                        width: "310px",
                      }}
                      width="310"
                      height="250"
                    ></canvas>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                {/* LINE CHART */}
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title">Expenses over time</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart">
                      <canvas
                        id="lineChart"
                        style={{
                          minHeight: "250px",
                          height: "250px",
                          maxHeight: "250px",
                          maxWidth: "100%",
                          display: "block",
                          width: "310px",
                        }}
                        width="310"
                        height="250"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChartsDashboard;
