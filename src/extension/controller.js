/* eslint-disable import/newline-after-import */
import 'anychart';


class Controller {
  constructor($scope) {
    // number of columns in dataset.
    $scope.cols = $scope.layout.qHyperCube.qSize.qcx;

    // dataset itself.
    $scope.dataSet = null;

    // here we'll store data series
    $scope.series = [];

    $scope.chart = window.anychart.line();
    $scope.chart.container('container');

    $scope.setData = data => {
      $scope.dataSet = window.anychart.data.set(data);
      $scope.populateSeries();
    };

    $scope.populateSeries = () => {
      $scope.series.length = 0;
      $scope.series = [];
      for (let i = 1; i < $scope.cols; i++) {
        const series = $scope.dataSet.mapAs({ x: 0, value: i });
        $scope.series.push(series);
      }
    };
  }
}

export default Controller;
