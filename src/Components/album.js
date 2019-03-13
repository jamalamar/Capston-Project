import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


import ItemModal from './item-modal.js'
import CountDown from './countdown.js'



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#aeaeab', /* fallback for old browsers */
    background: '-webkit-linear-gradient(to top, #efefef, #ffffff)',  /*Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to top, #efefef, #ffffff)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            
  },
  cardMedia: {
    padding: '26%', // 16:9
  },
  cardTitle: {
    display: 'flex',
    'flexDirection': 'column',
    alignItems: 'center',
    flexGrow: 1,
    'overflow': 'auto'
  },
  cardContent: {
    display: 'flex',
    'flexDirection': 'column',
    alignItems: 'center',
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 120,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    borderRadius: 10,
  },
  modalGrid: {
    display: 'flex',
    'justify-content': 'space-between'
  },
  modalDescription: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(200,200,200,0.1)', 
    width: '50%', 
  },
  countdown: {
    'flexDirection': 'column',
    alignItems: 'flex-start',
  }
});



class Album extends Component {
  
render() {
  
const { classes } = this.props;

const cards = this.props.items;


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map((item, index) => {

              return(
              
              <Grid item key={index} sm={6} md={4} lg={3}>
                
                <Card className={classes.card}>
                  
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.item_img}
                    title={item.item_name}/>

                  <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                      {item.item_short}
                    </Typography>
                    
                    <div className={classes.cardContent}>                    
                      <CountDown/>
                    </div>
                  </CardContent>

                  <CardActions>                    
                    <ItemModal>                    
                      <div style={getModalStyle()} className={classes.paper}>

                        <Typography variant="h5" component="h3">{item.item_name}</Typography>                        
                      
                        <Grid className={classes.modalGrid}>
                          <div>
                            <img src={item.item_img} style={{width: '250px', height: '250px'}}/>                                                
                            <Typography variant="h6" component="h4">Value: ${item.item_price}</Typography>                        
                          </div>

                          <div className={classes.modalDescription}>
                            {item.item_info}
                          </div>
                        </Grid>

                      </div>                    
                    </ItemModal>

                    <Button size="small" color="primary">Enter</Button>
                  </CardActions>
                
                </Card>


              </Grid>

            )})}

          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};


const AlbumWrapped = withStyles(styles)(Album)

export default AlbumWrapped;


