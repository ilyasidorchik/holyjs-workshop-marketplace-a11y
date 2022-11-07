import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import {
  Header,
  TouchHeader,
  Footer,
  SkipToContent,
} from 'components'
import IndexPage from 'pages/IndexPage'
import SearchPage from 'pages/SearchPage'
import TouchSearchPage from 'pages/TouchSearchPage'
import ProductPage from 'pages/ProductPage'
import WishlistPage from 'pages/WishlistPage'
import CartPage from 'pages/CartPage'

import { Data } from 'constants/contextData'

import {
  AppContext,
  useContextData,
} from 'hooks/useContextData'
import { VisuallyHidden } from 'uikit/components'

import './App.css'

function App() {
  let location = useLocation()
  const isTouch =
    location.pathname.includes('touch')

  useContextData()

  const [title, setTitle] = useState(
    document.title
  )
  useEffect(() => {
    setTimeout(() => {
      setTitle(document.title)
    }, 0)
  }, [location.pathname])

  return (
    <AppContext.Provider value={Data}>
      <div className="App">
        <SkipToContent />

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

          <Route
            path="/touch/search"
            element={<SearchPage />}
          />
        </Routes>

        <Footer />

        <VisuallyHidden>
          <span
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            Новая страница: {title}
          </span>
        </VisuallyHidden>
      </div>
    </AppContext.Provider>
  )
}

export default App
