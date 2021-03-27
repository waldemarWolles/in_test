import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { useDispatch } from 'react-redux'
import { updateProduct } from '../store/products-reducer'
import { useForm } from 'react-hook-form'
import { Grid, TextField, Typography } from '@material-ui/core'
import { useHistory } from 'react-router'

export const EditProductModal = ({ currentAction, activeProduct }) => {
  const [open, setOpen] = React.useState(false)
  const history = useHistory()
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  let productId = activeProduct.id - 1
  let itemId = activeProduct.id

  const { register, handleSubmit, reset } = useForm({})

  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(updateProduct(data, productId, itemId))

    console.log(data)
    reset()
    history.push('/')
    setOpen(false)
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {currentAction}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid item xs={12} sm={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography>
                  <b>{currentAction}</b>
                </Typography>
                <TextField
                  inputRef={register({ required: true })}
                  label="Product Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required={true}
                  defaultValue={activeProduct.name}
                />
                <TextField
                  inputRef={register({ required: true })}
                  label="Count"
                  name="count"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required={true}
                  defaultValue={activeProduct.count}
                />
                <TextField
                  inputRef={register({ required: true })}
                  label="Image Url"
                  name="imageUrl"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required={true}
                  defaultValue={activeProduct.imageUrl}
                />
                <TextField
                  inputRef={register({ required: true })}
                  label="Height"
                  name="height"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required={true}
                  defaultValue={activeProduct.size.height}
                />
                <TextField
                  inputRef={register({ required: true })}
                  label="Width"
                  name="width"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required={true}
                  defaultValue={activeProduct.size.width}
                />
                <TextField
                  inputRef={register({ required: true })}
                  label="Weight"
                  name="weight"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required={true}
                  defaultValue={activeProduct.weight}
                />

                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </form>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}
