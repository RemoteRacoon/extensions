/**
 * All data manipulation including
 * series managemnet describes through DataSet api.
 */
class DataSet {
  /**
   * Construct data set for line chart.
   */
  constructor() {
    // pointer to hyper cube.
    this._cube = null;

    // Series are represented as array of arrays.
    this._series = [];

    // data to draw chart.
    this._data = null;

    // columns in one entry.
    this._cols = null;

    // pointer to qMatrix
    this._matrix = null;

    this.setColumns = cols => {
      this._cols = cols;
    };

    this.getColumns = () => this._cols;

    this.getSeries = () => this._series;

    this.generate = data => {
      this._data = window.anychart.data.set(data);
      this.refreshSeries();
    };

    this.isEmpty = () => this._series.length;

    this.refreshSeries = () => {
      this._series.length = 0;
      this._series = [];
      for (let i = 1; i < this._cols; i++) {
        const series = this._data.mapAs({ x: 0, value: i });
        this._series.push(series);
      }
    };
  }
}

export default DataSet;
