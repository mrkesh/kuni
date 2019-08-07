import { deburr, lowerCase } from 'lodash';
import React from 'react';
import Country from '../../model/country';
import { Link } from 'react-router-dom';
import './list.css';

interface ListProps {
  data: Country[]
}

export default class List extends React.Component<ListProps> {

  render() {

    let { data } = this.props;

    return (
      <div id="list-container">
        {data.map((data, index) => {
          return (
            <div key={index} className="list-item">
              <Link to={`/${lowerCase(deburr(data.name))}`}>
                <img src={data.flag}/>
              </Link>
              <p>{data.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}