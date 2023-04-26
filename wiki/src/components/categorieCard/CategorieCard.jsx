import React from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../Tools/AuthContextProvider';

import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
   Divider,
} from '@mui/material';

export default class Categorie extends React.Component {
   static contextType = AuthContext;

   handleRemove = (event) => {
      console.log('remove id');
   };

   render() {
      return (
         <Card
            sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
         >
            <Link to={'/categorie/'+this.props.categorie.id}>
               <CardMedia
                  component="img"
                  image={this.props.categorie.image || 'https://source.unsplash.com/random'}
                  sx={{background: 'white', maxHeight:"400px"}}
               />
            </Link>
            <Divider />
            <CardContent sx={{flexGrow: 1}}>
               <Typography gutterBottom variant="h5" component="h2">
                  {this.props.categorie.nom}
               </Typography>
            </CardContent>
            <CardActions>
               <Link to={'/categorie/'+this.props.categorie.id}>
                  <Button size="small">Voir</Button>
               </Link>
            </CardActions>
         </Card>
      );
   };
}