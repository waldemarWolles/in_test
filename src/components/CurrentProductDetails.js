import React from 'react'

import Grid from '@material-ui/core/Grid'
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    maxWidth: 'md',
  },
  cardContainer: {
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
  },
  card: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  cardMedia: {
    paddingTop: '70%', // 16:9
    marginBottom: theme.spacing(1),
    width: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  cardContent_item: {
    paddingBottom: theme.spacing(4),
  },
  cardActions: {
    margin: '0 auto',
  },
  button: {
    width: '100%',
  },
  div: {
    position: 'relative',
    zIndex: 3,
    paddingTop: '100px',
  },
}))

export const CurrentProductDetails = ({ activeProduct }) => {
  const classes = useStyles()
  return (
    <Grid item xs={5} sm={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={activeProduct.imageUrl}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.cardContent_item}
            label="Product Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required={true}
          >
            Name:{activeProduct.name}
          </Typography>
          <Typography
            className={classes.cardContent_item}
            label="Product Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required={true}
          >
            Count:{activeProduct.count}
          </Typography>

          <Typography
            className={classes.cardContent_item}
            label="Product Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required={true}
          >
            Height:{activeProduct.size.height}
          </Typography>
          <Typography
            className={classes.cardContent_item}
            label="Product Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required={true}
          >
            Width:{activeProduct.size.width}
          </Typography>
          <Typography
            className={classes.cardContent_item}
            label="Product Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required={true}
          >
            Weight:{activeProduct.weight}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
