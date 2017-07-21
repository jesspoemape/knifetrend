import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Divider } from 'shared-components'

import './Tile.css'

class Tile extends Component {
  render() {
    const{ id, name, desc, imgUrl } = this.props.competition
    return (
      <Link to={`/competitions/${id}`} className="Landing_Tile__container">
        <img className="Landing_Tile__image" src={ imgUrl } alt={ name } />
        <div className="Landing_Tile__text-container">
          <h1 className="headerFont Landing_Tile__header">{ name }</h1>
          <Divider background={"white"} />
          <p className="smallBodyFont">
            { desc }
          </p>
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

export default Tile
