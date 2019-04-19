import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import { apiKey } from '../../constant';

const styles = {
  container: {
    margin: '0 10px'
  },
  input: {
    padding: '5px 10px',
    width: 200,
    border: '1px solid #f1f1f1',
    borderRadius: 20,
    '&:focus': {
      outline: 'none'
    }
  }
};

function Search(props) {
  const { classes, query, onSearchComplete } = props;
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const baseUrl = 'https://api.pexels.com/v1/search';

  const handleChange = event => {
    const { onChange } = props;
    onChange && onChange(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      setSearching(true);
    }
  };

  useEffect(() => {
    if (searching) {
      if (query !== '') {
        const url = `${baseUrl}?query=${query}&per_page=30&page=1`;
        fetch(url, {
          headers: {
            Authorization: apiKey
          }
        })
          .then(response => response.json())
          .then(json => {
            const { next_page, page, per_page, photos, total_results } = json;
            onSearchComplete && onSearchComplete({ photos, total_results });
            setResults(photos);
            setSearching(false);
          });
      } else {
        setResults([]);
        onSearchComplete && onSearchComplete(results);
        setSearching(false);
      }
    }
  }, [searching]);

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="search"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

Search.propTypes = {
  classes: PropTypes.object,
  query: PropTypes.string,
  onChange: PropTypes.func,
  onSearchStart: PropTypes.func,
  onSearchComplete: PropTypes.func
};

Search.defaultProps = {
  query: ''
};

export default withStyles(styles)(Search);
