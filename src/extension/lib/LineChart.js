import 'anychart';
import DataSet from './DataSet';
/**
 * All manipulation with chart
 * are described through Chart singletone api.
 */
class LineChart {
  /**
   * Create LineChart instance.
   * @param {Object} layout - Default View layout.
   */
  constructor() {
    // Pointer to layout.
    this._layout = null;

    // Array of objects containing measure names.
    this._measures = null;

    this._type = 'LineChartInstance';

    // Create dataset to manipulate data.
    this._dataSet = new DataSet();

    // Line chart.
    this._chart = window.anychart.line();

    this.draw = () => {
      this._chart.draw();
    };


    /**
     * Invalidate layout and change LineChart configuration if necessary.
     * Changes may be caused by changing Properties panel.
     * @param {Object} DefaultViewLayout - DefaultView layout.
     */
    this.invalidate = DefaultViewLayout => {
      this._layout = DefaultViewLayout;
      const hyperCube = DefaultViewLayout.qHyperCube;
      this._measures = hyperCube.qMeasureInfo;

      // Check if measures added.
      if (hyperCube.qSize.qcx != this._dataSet.getColumns()) {
        // set number of columns to dataset.
        this._dataSet.setColumns(hyperCube.qSize.qcx);

        const { qMatrix } = hyperCube.qDataPages[0];

        const dataSet = this.processData(qMatrix);
        this._dataSet.generate(dataSet);

        this.setSeries();
      }

      this.setMarkers();

      this.setXLabelsRotation();
      this.setXTitle();
      this.setYTitle();

      this.setLegend();
      this.setGrid();
    };


    /**
     * Derive and process data from qMatrix for dataset.
     * @param {Object} matrix - The qMatrix.
     * @returns {Array}
     */
    this.processData = matrix => {
      const data = matrix.map(entry => {
        const set = [];
        set.push(entry[0].qText);
        for (let i = 1; i < entry.length; i++) {
          set.push(entry[i].qNum);
        }
        return set;
      });

      return data;
    };

    this.setContainer = cont => {
      this._chart.container(cont);
    };

    // Add series to chart itself.
    this.setSeries = () => {
      this._chart.removeAllSeries();
      const cols = this._dataSet.getColumns();
      const dataSeries = this._dataSet.getSeries();
      for (let i = 0; i < cols - 1; i++) {
        const series = this._chart.line(dataSeries[i]);
        series.name(this._measures[i].qFallbackTitle);
      }
    };

    // Add markers to series (start, circle etc.).
    this.setMarkers = () => {
      for (let i = 0; i < this._chart.getSeriesCount(); i++) {
        this._chart.getSeriesAt(i).markers().type(this._layout.markers.value);
      }
    };

    // Set rotation to x labels in case they are too wide.
    this.setXLabelsRotation = () => {
      this._chart.xAxis().labels().rotation(this._layout.ticks.x);
    };

    // Title X axis.
    this.setXTitle = () => {
      if (this._layout.axes.x) {
        this._chart.xAxis().title(this._layout.axes.x);
      } else {
        this._chart.xAxis().title(this._layout.qHyperCube.qDimensionInfo[0].qFallbackTitle);
      }
    };

    // Title Y axis.
    this.setYTitle = () => {
      this._chart.yAxis().title(this._layout.axes.y);
    };

    // Set legend.
    this.setLegend = () => {
      this._chart.legend().enabled(this._layout.legend.show);
      this._chart.legend().position(this._layout.legend.position);
      this._chart.legend().align(this._layout.legend.alignment);
    };

    this.setGrid = () => {
      this._chart.xGrid().enabled(this._layout.grid.show);
      this._chart.yGrid().enabled(this._layout.grid.show);
    };
  }
}

export default new LineChart();
