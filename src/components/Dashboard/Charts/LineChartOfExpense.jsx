import React from 'react'
import ContentHeader from '../Main_content/ContentHeader';

const LineChartOfExpense = () => {
return (
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
      );
    };

export default LineChartOfExpense