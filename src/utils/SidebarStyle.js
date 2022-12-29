const sidebarStyle = ({ active }) => ({
  '.menu-icon': {
    backgroundColor: '#e1e1e1',
  },
  '.menu-anchor': {
    backgroundColor: active ? '#13e0d5' : 'initial',
    color: '#6f767e',
    margin: '10px',
    fontSize: '1rem',
  },
  '.menu-anchor:hover': {
    backgroundColor: '#efefef',
    color: 'black',
    borderRadius: '10px',
  },
});

export default sidebarStyle;
