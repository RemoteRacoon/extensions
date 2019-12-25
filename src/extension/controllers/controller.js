
/**
 * Controller loading additional data pages.
 */
class Controller {
  constructor($scope, $element) {
    $scope.cube = $scope.layout.qHyperCube;
    $scope.matrix = [];
    this.loadBtn = document.getElementById('loadBtn');
    $element.find('#loadBtn').on('click', () => {
      const requestPage = [{
        qTop: $scope.matrix.length,
        qLeft: 0,
        qWidth: 3,
        qHeight: 100
      }];
      $scope.backendApi.getData(requestPage)
        .then(data => {
          $scope.matrix.push(...data[0].qMatrix);
        });
    });
  }
}

export default Controller;
