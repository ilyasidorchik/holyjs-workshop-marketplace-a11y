import { useState, createContext } from 'react'

import { Data, Delivery } from 'constants/'

export const AppContext = createContext(Data)

export const useContextData = () => {
  const [cartCount, setCartCount] = useState(0)
  const removeFromCart = () => {
    const newCount = cartCount - 1
    if (newCount >= 0) {
      setCartCount(newCount)
    }
  }
  const addToCart = () => {
    setCartCount(cartCount + 1)
  }
  Data.cartCount = cartCount
  Data.removeFromCart = removeFromCart
  Data.addToCart = addToCart

  const [wishlistCount, setWishlistCount] =
    useState(0)
  const addToWishlist = () => {
    setWishlistCount(wishlistCount + 1)
  }
  Data.wishlistCount = wishlistCount
  Data.addToWishlist = addToWishlist

  const [filteredData, setFilteredData] =
    useState(Data.search.data)
  const onFilterChange = (e) => {
    const { name, value } = e.target

    const filteredItems = Data.items.filter(
      (item) => {
        if (value === Delivery.ANY) {
          return true
        }

        if (!item[name]) {
          return false
        }

        return item[name] === value
      }
    )
    setFilteredData(filteredItems)
  }
  Data.search.data = filteredData
  Data.onFilterChange = onFilterChange
}
