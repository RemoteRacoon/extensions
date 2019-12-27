/* eslint-disable import/newline-after-import */
import 'anychart';
import LineChart from './lib/LineChart';


class Controller {
  constructor($scope) {
    // create chart.
    $scope.chart = LineChart;
    $scope.chart.setContainer('container');
  }
}

export default Controller;
