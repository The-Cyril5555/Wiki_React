import React from 'react';
import {Container, Typography, Paper, Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {CapacitorHttp} from '@capacitor/core';

import API from '../../Model/Api';
import NoPage from '../noPage/NoPage';

class ArticleContenu extends React.Component {
   state = {
      article: null,
      redirect: false,
   };

   static token = null;

   componentDidMount() {
      CapacitorHttp.get({url: API.url + 'categorie/' + this.props.id});
      CapacitorHttp.get({url: API.url + 'article/' + this.props.id}).then((res) => {
         const articles = res.data;
         if (articles.length > 0) {
            const article = articles[0];
            this.setState({article: article});
         } else {
            this.setState({redirect: true});
         }
      });
      this.token = localStorage.getItem('token');
   }

   render() {
      if (this.state.redirect) {
         return (<NoPage/>);
      }
      if (!this.state.article) {
         return (<></>);
      }
      return (
         <>
            
            <Box
               sx={{
                  height: 500,
                  backgroundImage: `url(${"/" + this.state.article.image || 'https://source.unsplash.com/random'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  marginBottom: -30,
                  width:'100vw',
               }}
            />
            <Container maxWidth="md">
               <Box sx={{py: 8}}>
                  <Paper elevation={3} sx={{p: 4}}>
                     <Typography variant="h3" component="h1" gutterBottom>
                        {this.state.article.titre}
                     </Typography>
                     <Typography>
                        Auteur : {this.state.article.auteur}
                     </Typography>
                     <Typography variant="body1" sx={{mt: 4, whiteSpace: 'pre-wrap', textAlign: 'left'}}>
                        {this.state.article.informations}
                     </Typography>
                  </Paper>
               </Box>
            </Container>
         </>
      );
   }
}

export default function Article() {
   const {id} = useParams();

   return (<ArticleContenu id={id} />);
}