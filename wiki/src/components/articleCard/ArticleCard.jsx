import React from 'react';
import {Link} from 'react-router-dom';
import {CapacitorHttp} from '@capacitor/core';
import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
   Divider,
} from '@mui/material';

import API from '../../Model/Api';
import {AuthContext} from '../../Tools/AuthContextProvider';

export default class Articles extends React.Component {
   static contextType = AuthContext;

   handleRemove = (event) => {
      const options = {
         url: API.url + 'article/' + this.props.article.id,
         headers: {
            'Authorization': `Bearer ${this.context.token}`,
         },
      };
      CapacitorHttp.delete(options).then((response) => {
         if (this.props.updateData) {
            this.props.onUpdate(response.data);
         }
         this.props.onUpdate(null);
      }).catch((err) => this.setState({error: err + ''}));
   };

   render() {
      return (
         <Card
            sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
         >
            <Link to={'/article/'+this.props.article.id}>
               <CardMedia
                  component="img"
                  image={this.props.article.image || 'https://source.unsplash.com/random'}
                  sx={{background: 'white'}}
                  alt="random"
               />
            </Link>
            <Divider />
            <CardContent sx={{flexGrow: 1}}>
               <Typography gutterBottom variant="h5" component="h2">
                  {this.props.article.titre}
               </Typography>
               <Typography
                  sx={{
                     overflow: 'hidden',
                     textOverflow: 'ellipsis',
                     display: '-webkit-box',
                     WebkitLineClamp: 3,
                     WebkitBoxOrient: 'vertical',
                  }}
               >
                  {this.props.article.informations}
               </Typography>
            </CardContent>
            <CardActions>
               <Link to={'/article/'+this.props.article.id}>
                  <Button size="small">View</Button>
               </Link>
               {this.context.token &&(
                  <Link to={'/article/edit/'+this.props.article.id}>
                     <Button size="small" color='secondary'>Edit</Button>
                  </Link>
               )}
               {this.context.token &&(
                  <Button size="small" onClick={this.handleRemove} color='secondary'>remove</Button>
               )}
            </CardActions>
         </Card>
      );
   }
}
