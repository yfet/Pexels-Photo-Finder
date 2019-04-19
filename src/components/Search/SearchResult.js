import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import Photo from '../Photo/Photo';

const styles = {
  container: {
    padding: '0 20px'
  },
  photoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
};

function SearchResult(props) {
  const {
    classes,
    query,
    data: { photos, total_results }
  } = props;

  console.log(photos);

  return photos.length ? (
    <div className={classes.container}>
      <h1>
        {total_results} result(s) found for: {query}
      </h1>
      <div className={classes.photoContainer}>
        {photos.map((photo, index) => (
          <Photo
            key={index}
            photo={photo.src.medium}
            alt={'photo' + photo.id}
          />
        ))}
      </div>
    </div>
  ) : null;
}

SearchResult.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  query: PropTypes.string
};

SearchResult.defaultProps = {
  data: [],
  query: ''
};

export default withStyles(styles)(SearchResult);
