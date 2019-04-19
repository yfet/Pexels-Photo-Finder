import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Search from '../Search/Search';

const styles = {
  container: {
    height: 40,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  brand: {
    margin: 0,
    padding: 0,
    fontSize: 24
  },
  splitter: {
    flex: 1
  },
  menu: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  menuItem: {
    marginRight: 20,
    cursor: 'pointer',
    '&:last-of-type': {
      marginRight: 0
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};

function Header(props) {
  const { classes, onSearchChange, onSearchComplete, query } = props;

  const handleSearchChange = value => {
    onSearchChange && onSearchChange(value);
  };

  const handleSearchComplete = results => {
    onSearchComplete && onSearchComplete(results);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.brand}>Photo Finder</h1>
      <Search
        onChange={handleSearchChange}
        query={query}
        onSearchComplete={handleSearchComplete}
      />
      <ul className={classes.menu}>
        <li className={classes.menuItem}>Home</li>
        <li className={classes.menuItem}>About</li>
        <li className={classes.menuItem}>Contact</li>
      </ul>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object,
  searching: PropTypes.bool,
  onSearchChange: PropTypes.func,
  onSearchComplete: PropTypes.func,
  query: PropTypes.string
};

Header.defaultProps = {
  searching: false
};

export default withStyles(styles)(Header);
