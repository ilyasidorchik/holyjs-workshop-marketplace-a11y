import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'

import MenuItem from './MenuItem'

import './Menu.scss'

const Menu = () => {
  const { wishlistCount, cartCount } =
    useContext(AppContext)

  return (
    <div className="Header-Menu">
      <MenuItem
        text="Вишлист"
        url="/wishlist"
        count={wishlistCount}
      />
      <MenuItem
        text="Корзина"
        url="/cart"
        count={cartCount}
      />
    </div>
  )
}

export default Menu
