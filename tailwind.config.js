module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        card: '275px',
        checkout: '902px'
      },
      backgroundColor: {
        background: '#f2f2f2'
      },
      boxShadow: {
        'solid-bottom': '0px 2px 0px 0px #D9D9D9',
      },
      outline: {
        card: ['1px dashed #ededed', '-5px'],
      },
      borderColor: {
        'gray-250': '#ededed'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
