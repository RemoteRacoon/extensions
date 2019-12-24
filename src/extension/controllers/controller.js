
/**
 * Controller loading additional data pages.
 */
class Controller {
  constructor($scope) {
    $scope.cube = $scope.layout.qHyperCube;
    $scope.matrix = [];
    $scope.loadData = () => {
      const requestPage = {
        qTop: $scope.matrix.length,
        qLeft: 10,
        qWidth: 4,
        qHeight: 100
      };
      $scope.backendApi.getData(requestPage)
        .then(data => {
          $scope.matrix.push(...data[0].qMatrix);
        }).catch(err => console.log(err));
    };
  }
}

Controller.$inject = ['$scope', '$element'];
export default Controller;
