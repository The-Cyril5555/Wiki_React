import React from 'react';
import {Grid, Container, Box} from '@mui/material';
import {CapacitorHttp} from '@capacitor/core';

import ArticleCard from '../articleCard/ArticleCard';
import CategorieCard from '../categorieCard/CategorieCard';
import API from '../../Model/Api';

export default class Home extends React.Component {
   state = {
      articles: [],
      categories: [],
   };

   componentDidMount() {
      // Sélectionner 2 articles et catégories aléatoires
      CapacitorHttp.get({url: API.url + 'article'})
         .then((res) => {
            let articles = res.data;
            articles = articles.sort(() => 0.5 - Math.random()).slice(0, 2);
            this.setState({articles: articles});
         });
      CapacitorHttp.get({url: API.url + 'categorie'})
         .then((res) => {
            let categories = res.data;
            categories = categories.sort(() => 0.5 - Math.random()).slice(0, 2);
            this.setState({categories: categories});
         });
   }

   render() {
      return (
         <Container>
            <Box>
               <Grid spacing={2} sx={{textAlign: 'left'}}>
                  <Container sx={{py: 1}} maxWidth="md">
                     <Grid container spacing={4}>
                        {this.state.articles.map((article) => (
                           <Grid item key={article.titre} xs={12} sm={6}>
                              <ArticleCard article={article} />
                           </Grid>
                        ))}
                     </Grid>
                  </Container>
                  <Container sx={{py: 1}} maxWidth="md">
                     <Grid container spacing={4}>
                        {this.state.categories.map((categorie) => (
                           <Grid item key={categorie.title} xs={12} sm={6}>
                              <CategorieCard categorie={categorie} />
                           </Grid>
                        ))}
                     </Grid>
                  </Container>
               </Grid>
            </Box>
         </Container>
      );
   }
};