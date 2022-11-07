import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'

import MenuItem from './MenuItem'

import './Menu.scss'

const Menu = () => {
  const { wishlistCount, cartCount } =
    useContext(AppContext)

  return (
    <nav className="Header-Menu" aria-label="Меню">
      <ul className="Header-List">
        <li>
          <MenuItem
            text="Вишлист"
            url="/wishlist"
            count={wishlistCount}
          />
        </li>
        <li>
          <MenuItem
            text="Корзина"
            url="/cart"
            count={cartCount}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Menu
