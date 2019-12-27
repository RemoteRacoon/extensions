import 'anychart';
/**
 * All manipulation with chart
 * are described through Chart singletone api.
 */
class Chart {
  constructor() {
    this.chart = window.anychart.line();
  }
}

export default () => new Chart();
