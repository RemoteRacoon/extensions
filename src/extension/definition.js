export default {
  type: 'items',
  component: 'accordion',
  items: {
    settings: {
      uses: 'settings',
      items: {
        MyColorPicker: {
          label: 'My color-picker',
          component: 'color-picker',
          ref: 'myColor',
          type: 'integer',
          defaultValue: {
            color: '000000'
          }
        },
        Legend: {
          type: 'items',
          label: 'Legend',
          items: {
            ShowLegend: {
              type: 'boolean',
              label: 'Show legend',
              ref: 'showLegend',
              defaultValue: true
            }
          }
        },
        Axes: {
          type: 'items',
          label: 'Axes',
          items: {
            XDef: {
              type: 'string',
              label: 'X axis title',
              ref: 'axes.x',
              defaultValue: 'X-axis'
            },
            YDef: {
              type: 'string',
              label: 'Y axis title',
              ref: 'axes.y',
              defaultValue: 'Y-axis'
            }
          }
        }
      }
    },
    dimensions: {
      uses: 'dimensions',
      min: 1,
      max: 1
    },
    measures: {
      uses: 'measures',
      min: 1,
      max: 5
    }
  }
};
