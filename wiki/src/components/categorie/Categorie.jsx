import React from 'react';
import './Categorie.css';
import {CapacitorHttp} from '@capacitor/core';
import API from '../../Model/Api';
import CategorieCard from '../categorieCard/CategorieCard';
import {Container, Grid} from '@mui/material';


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
    return (
       <>
          <Container sx={{py: 8}} maxWidth="md">
             <Grid container spacing={4}>
                {this.state.categories.map((categorie) => (
                   <Grid item key={categorie.title} xs={12} sm={6} md={4}>
                      <CategorieCard categorie={categorie} />
                   </Grid>
                ))}
             </Grid>
          </Container>
       </>
    );
 };
}