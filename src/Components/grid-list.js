import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


import pic1 from '../assets/caribean-bungalow.jpg'
import pic2 from '../assets/computer-dev.jpg'
import pic3 from '../assets/apple-devices.jpg'
import pic4 from '../assets/hong-kong.jpg'
import pic5 from '../assets/aerial-boat.jpg'
import pic6 from '../assets/ad-bay.jpg'


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});



 
 //  import image from 'path/to/image.jpg';
 // [etc...]

  const tileData = [
    {
      img: pic1,
      title: 'Image',
      author: 'author',
    },
    {
      img: pic2,
      title: 'Image',
      author: 'author',
    },
    {
      img: pic3,
      title: 'Image',
      author: 'author',
    },
    {
      img: pic4,
      title: 'Image',
      author: 'author',
    },
    {
      img: pic5,
      title: 'Image',
      author: 'author',
    },
    {
      img: pic6,
      title: 'Image',
      author: 'author',
    },
 ];
 
function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);

