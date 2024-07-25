import React from "react";
import CardHeader from "../Main_content/CardHeader";
import ContentHeader from "../Main_content/ContentHeader";

const ChartsDashboard = () => {
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
                    <h3 className="card-title">Pie Chart</h3>
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
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div></div>
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div></div>
                      </div>
                    </div>
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
                      className="chartjs-render-monitor"
                    ></canvas>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                {/* LINE CHART */}
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title">Line Chart</h3>
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
                      <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                          <div></div>
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                          <div></div>
                        </div>
                      </div>
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
                        className="chartjs-render-monitor"
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
