import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = {
  photo: {
    margin: 3,
    '&:hover': {
      transform: 'scale(1.1)'
    },
    transition: 'transform 500ms'
  }
};

function Photo(props) {
  const { classes, photo, alt } = props;
  return <img className={classes.photo} src={photo} alt={alt} />;
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default withStyles(styles)(Photo);
