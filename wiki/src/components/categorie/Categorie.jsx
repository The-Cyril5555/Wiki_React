import React from 'react';
import './Categorie.css';
import {CapacitorHttp} from '@capacitor/core';
import API from '../../Model/Api';


export default class Categorie extends React.Component {
  state = {
     categories: [],
  };

  componentDidMount() {
    CapacitorHttp.get({url: API.url + 'categorie'})
       .then((res) => {
          const categories = res.data;
          this.setState({categories});
       });
  }

  render() {
    console.log("cat",this.state.categories);
    return (
      <div className="categorie">
        <h1>Catégories</h1>
        <ul className="categorie-list">
          {this.state.categories.map((category) => (
            <li key={category.id}>{category.nom}</li>
          ))}
        </ul>
      </div>
    );
  };
}