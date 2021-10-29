module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'card': '278px',
        'checkout': '900px'
      },
      height: {
        '13': '3.25rem'
      },
      boxShadow: {
        'solid-bottom': '0px 2px 0px 0px #D9D9D9',
      },
      outline: {
        'card': ['1px dashed #ededed', '-6px'],
      },
      borderColor: {
        'gray-250': '#ededed'
      },
      spacing: {
        '4.5': '1.063rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
