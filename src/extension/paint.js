/**
 * Paint function which calls every time any changes in properies panel detected.
 * @param {Object} $element - Qlik native object.
 * @param {Object} layout  - Qlik native object.
 * @description Paint function.
 */
export default function ($element, layout) {
  /** @type {Array} */
  const matrix = layout.qHyperCube.qDataPages[0].qMatrix;
  const { chart } = this.$scope;
  console.log('paint');

  /**
   * Matrix's number of columns.
   * @type {number}
   */
  const cols = layout.qHyperCube.qSize.qcx;

  /**
   * Check if cube's width is equal to $scope's one,
   * if not - cache the new data and draw series.
   * If no data in $scope - update.
   */
  if (this.$scope.cols != cols || !this.$scope.dataSet) {
    this.$scope.cols = cols;

    // preparing dataset.
    const data = matrix.map(entry => {
      const set = [];
      set.push(entry[0].qText);
      for (let i = 1; i < entry.length; i++) {
        set.push(entry[i].qNum);
      }
      return set;
    });
    this.$scope.setData(data);

    // Clear plot and draw new series.
    chart.removeAllSeries();
    for (let i = 0; i < cols - 1; i++) {
      const series = chart.line(this.$scope.series[i]);
      series.name(layout.qHyperCube.qMeasureInfo[i].qFallbackTitle);
    }
  }

  for (let i = 0; i < chart.getSeriesCount(); i++) {
    chart.getSeriesAt(i).markers().type(layout.markers.value);
  }


  chart.xAxis().labels().rotation(layout.ticks.x);
  if (layout.axes.x) {
    chart.xAxis().title(layout.axes.x);
  } else {
    chart.xAxis().title(layout.qHyperCube.qDimensionInfo[0].qFallbackTitle);
  }

  chart.yAxis().title(layout.axes.y);

  chart.legend().enabled(layout.legend.show);
  chart.legend().position(layout.legend.position);
  chart.legend().align(layout.legend.alignment);
  chart.draw();
}
