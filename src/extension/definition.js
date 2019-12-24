export default {
  type: 'items',
  component: 'accordion',
  items: {
    settings: {
      uses: 'settings'
    },
    dimensions: {
      uses: 'dimensions',
      min: 0,
      max: 10
    },
    measures: {
      uses: 'measures',
      min: 0,
      max: 10
    }
  }
};
