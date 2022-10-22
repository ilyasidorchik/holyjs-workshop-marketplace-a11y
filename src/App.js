import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import {
  Header,
  TouchHeader,
  Footer,
} from 'components'
import IndexPage from 'pages/IndexPage'
import SearchPage from 'pages/SearchPage'
import TouchSearchPage from 'pages/TouchSearchPage'
import TouchSearchPageFixed from 'pages/TouchSearchPageFixed'
import ProductPage from 'pages/ProductPage'
import WishlistPage from 'pages/WishlistPage'
import CartPage from 'pages/CartPage'

import { Data } from 'constants/contextData'

import {
  AppContext,
  useContextData,
} from 'hooks/useContextData'

import './App.css'

function App() {
  const location = useLocation()
  const isTouch =
    location.pathname.includes('touch')

  useContextData()

  return (
    <AppContext.Provider value={Data}>
      <div className="App">
        {isTouch ? <TouchHeader /> : <Header />}

        <Routes>
          <Route
            path="/"
            element={<IndexPage />}
          />
          <Route
            path="/search"
            element={<SearchPage />}
          />
          <Route
            path="/touch/search"
            element={<TouchSearchPage />}
          />
          <Route
            path="/touch/search-fixed"
            element={<TouchSearchPageFixed />}
          />
          <Route
            path="/product"
            element={<ProductPage />}
          />
          <Route
            path="/wishlist"
            element={<WishlistPage />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
        </Routes>

        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
