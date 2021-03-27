import './App.css'
import { Suspense } from 'react'
import { Products } from './pages/Products'
import { Header } from './components/Header'
import { Grid } from '@material-ui/core'
import Preloader from './components/Preloader'
import { ProductDetail } from './pages/ProductDetail'
import { Route, Switch } from 'react-router'

function App() {
  return (
    <>
      <Header />

      <Grid container={true} component="main">
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/" render={() => <Products />} />
            <Route
              exact
              path="/productDetails/:id?"
              render={(props) => <ProductDetail {...props} />}
            />
          </Switch>
        </Suspense>
      </Grid>
    </>
  )
}

export default App
