import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

class Tile extends Component {
  render() {
    const{ id, name, desc, imgUrl } = this.props.competition
    return (
        <Link to={`/competitions/${id}`} className={ css(styles.container) }>
          <img className={ css(styles.image) } src={ imgUrl } alt={ name } />
          <div className={ css(styles.textContainer) }>
            <div className={ css(styles.name) }>{ name }</div>
            <div className={ css(styles.divider) }></div>
            <div className={ css(styles.description) }>
              { desc }
            </div>
          </div>
        </Link>
    )
  }
}

Tile.propTypes = {
  competition: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    imgUrl: PropTypes.string
  })
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: '100%',
    background: 'rgba(33,33,33,.6)'
  },
  image: {
    width: '100%'
  },
  textContainer: {
    color: 'white',
    height: 84,
    padding: '10px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  name: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 300
  },
  divider: {
    height: 1,
    width: 23,
    background: 'white'
  },
  description: {
    fontWeight: 300,
    fontSize: 10,
    lineHeight: 1.3
  }
})

export default Tile
