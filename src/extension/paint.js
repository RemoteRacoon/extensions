export default ($element, layout) => {
  /** @type {Array} */
  const matrix = layout.qHyperCube.qDataPages[0].qMatrix;

  const data = matrix.map(entry => {
    const set = [];
    set.push(entry[0].qText);
    for (let i = 1; i < entry.length; i++) {
      set.push(entry[i].qNum);
    }
    return set;
  });
};
