/**
 * Paint function which calls every time any changes in properies panel detected.
 * @param {Object} $element - Qlik native object.
 * @param {Object} layout  - Qlik native object.
 * @description Paint function.
 */
export default function ($element, layout) {
  /** @type {Array} */
  const { chart } = this.$scope;
  chart.invalidate(layout);
  chart.draw();
}
