export default {
  type: 'items',
  component: 'accordion',
  items: {
    settings: {
      uses: 'settings',
      items: {
        Legend: {
          type: 'items',
          label: 'Legend',
          items: {
            ShowLegend: {
              type: 'boolean',
              label: 'Show legend',
              ref: 'legend.show',
              defaultValue: false
            },
            Position: {
              type: 'string',
              label: 'Position:',
              ref: 'legend.position',
              component: 'radiobuttons',
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                }
              ],
              defaultValue: 'top'
            },
            Align: {
              type: 'string',
              label: 'Alignment',
              ref: 'legend.alignment',
              component: 'radiobuttons',
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                },
                {
                  value: 'center',
                  label: 'center'
                }
              ],
              defaultValue: 'top'
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
              defaultValue: null
            },
            YDef: {
              type: 'string',
              label: 'Y axis title',
              ref: 'axes.y',
              defaultValue: 'Y axis'
            }
          }
        },
        XAxisTicksRotation: {
          type: 'number',
          component: 'slider',
          label: 'X ticks rotation',
          ref: 'ticks.x',
          min: 0,
          max: 90,
          step: 2,
          defaultValue: '45'
        },
        Markers: {
          type: 'string',
          label: 'Markers',
          component: 'radiobuttons',
          ref: 'markers.value',
          options: [
            {
              value: 'star4',
              label: 'star4'
            },
            {
              value: 'start5',
              label: '5-vertices star'
            },
            {
              value: 'circle',
              label: 'circle'
            }
          ],
          defaultValue: 'circle'
        },
        Grid: {
          type: 'boolean',
          component: 'switch',
          label: 'Grid',
          ref: 'grid.show',
          options: [
            {
              value: true,
              label: 'On'
            },
            {
              value: false,
              label: 'Off'
            }
          ]
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
