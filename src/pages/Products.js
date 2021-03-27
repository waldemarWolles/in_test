import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { useHistory } from 'react-router'
import { DeleteProductModal } from '../components/DeleteProductModal'
import { ProductModal } from '../components/EditProductModal'
import { getProducts, setActiveProduct } from '../store/products-reducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { CreateProductModal } from '../components/CreateProductModal'

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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: '0 auto',
  },
  cardMedia: {
    paddingTop: '70%', // 16:9
    marginBottom: theme.spacing(1),
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardActions: {
    margin: '0 auto',
  },
  button: {
    textAlign: 'center',
  },
  div: {
    position: 'relative',
    zIndex: 3,
    paddingTop: '100px',
  },
}))

export const Products = React.memo(() => {
  const classes = useStyles()

  const { products } = useSelector((state) => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    console.log('render')
  }, [dispatch])

  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={12}>
        <div className={classes.div}></div>
        <Container className={classes.cardGrid}>
          <Grid className={classes.cardContainer} container={true} spacing={4}>
            {products.map((product, index) => (
              <Grid
                key={product + index}
                item={true}
                xs={12}
                sm={6}
                md={6}
                lg={4}
              >
                <Card className={classes.card}>
                  {!product && (
                    <CardMedia
                      className={classes.cardMedia}
                      image={
                        'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
                      }
                    />
                  )}
                  {product && (
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.imageUrl}
                    />
                  )}
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
                      <b>Name:{product.name}</b>
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
                      <b>Count:{product.count}</b>
                    </Typography>
                    <div>
                      <Typography
                        className={classes.cardContent_item}
                        label="Product Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required={true}
                      >
                        <b>Description:</b> Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Accusantium omnis cumque
                        velit iusto tempora nam expedita facere ipsam quasi
                        accusamus quia sed, neque amet iste perferendis sunt
                        natus soluta dignissimos!
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <NavLink
                      onClick={() => dispatch(setActiveProduct(product.id))}
                      to={`/productDetails/${product.id}`}
                    >
                      {'details'}
                    </NavLink>
                    <DeleteProductModal id={product.id - 1} />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className={classes.button}>
            <CreateProductModal currentAction={'Create Product'} />
          </div>
        </Container>
      </Grid>
    </React.Fragment>
  )
})
