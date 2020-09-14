import React, { useState } from 'react';
import  './productscard.css';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const ProductCards  = (props) =>{
    const classes = useStyles();
    return (<article className="card" >
                            <CardContent>
                                <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h7">
                                        {props.subheader}
                                    </Typography>
                                    <Typography gutterBottom variant="h4">
                                         {props.header}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <InfoIcon />
                                </Grid>
                                </Grid>  
                                <Typography color="textSecondary" variant="body2">
                                      {props.content}
                                </Typography>
                                </CardContent>
                                <Divider variant="middle" />
                                <div className={classes.section2}>
                                <Typography gutterBottom variant="body1"> Access available </Typography>
                                <div>
                                <Chip className={classes.chip} label="Extra Soft" />
                                <Chip className={classes.chip} color="primary" label="Soft" />
                                <Chip className={classes.chip} label="Medium" />
                                <Chip className={classes.chip} label="Hard" />
                                </div>
                            </div>
                            
                            <div className={classes.section3}>
                                <Button color="primary">Add to cart</Button>
                                <Button color="primary">Add to cart</Button>
                            </div>
                            
                </article>)
}

export default ProductCards
