import React, { useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { CurrentProductDetails } from '../components/CurrentProductDetails'
import { makeStyles } from '@material-ui/core'
import { EditProductModal, ProductModal } from '../components/EditProductModal'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    maxHeight: '1200px',
  },
}))

export const ProductDetail = () => {
  const classes = useStyles()

  const { activeProduct } = useSelector((state) => state.products)

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12}>
        <Paper elevation={7} style={{ padding: 10 }}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h6">Product Details</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <EditProductModal
                activeProduct={activeProduct}
                currentAction={'Edit'}
              />
            </Grid>
          </Grid>

          <Grid container justify="center" item>
            <CurrentProductDetails activeProduct={activeProduct} />
          </Grid>
        </Paper>
      </Grid>

      <Grid container item xs={12} spacing={3}>
        <Grid item xs>
          <Typography variant="h5">Comments:</Typography>
        </Grid>
        {activeProduct &&
          activeProduct.comments?.map((comment) => (
            <Grid item xs={12} key={comment.id}>
              <Paper elevation={7} style={{ padding: 10 }}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      Date: {comment.date}
                    </Typography>
                    <Divider />

                    <Typography variant="subtitle2">
                      Description:{comment.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Grid>
  )
}
