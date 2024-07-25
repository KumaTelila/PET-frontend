import React from 'react';

const ChartsDashboard = () => {
  return (
    <div className="content-wrapper">
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            {/* AREA CHART */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Area Chart</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
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
                    id="areaChart"
                    style={{ minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%', display: 'block', width: '310px' }}
                    width="310"
                    height="250"
                    className="chartjs-render-monitor"
                  ></canvas>
                </div>
              </div>
            </div>
  
            {/* DONUT CHART */}
            <div className="card card-danger">
              <div className="card-header">
                <h3 className="card-title">Donut Chart</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
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
                  id="donutChart"
                  style={{ minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%', display: 'block', width: '310px' }}
                  width="310"
                  height="250"
                  className="chartjs-render-monitor"
                ></canvas>
              </div>
            </div>
  
            {/* PIE CHART */}
            <div className="card card-danger">
              <div className="card-header">
                <h3 className="card-title">Pie Chart</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
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
                  style={{ minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%', display: 'block', width: '310px' }}
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
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
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
                    style={{ minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%', display: 'block', width: '310px' }}
                    width="310"
                    height="250"
                    className="chartjs-render-monitor"
                  ></canvas>
                </div>
              </div>
            </div>
  
            {/* BAR CHART */}
            <div className="card card-success">
              <div className="card-header">
                <h3 className="card-title">Bar Chart</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
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
                    id="barChart"
                    style={{ minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%', display: 'block', width: '310px' }}
                    width="310"
                    height="250"
                    className="chartjs-render-monitor"
                  ></canvas>
                </div>
              </div>
            </div>
  
            {/* STACKED BAR CHART */}
            <div className="card card-success">
              <div className="card-header">
                <h3 className="card-title">Stacked Bar Chart</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
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
                    id="stackedBarChart"
                    style={{ minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%', display: 'block', width: '310px' }}
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
    );
};

export default ChartsDashboard;
