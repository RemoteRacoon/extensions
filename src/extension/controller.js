/* eslint-disable import/newline-after-import */
import 'anychart';

class Controller {
  constructor($scope) {
    $scope.chart = window.anychart.line();
    $scope.chart.container('container');
  }
}

export default Controller;
