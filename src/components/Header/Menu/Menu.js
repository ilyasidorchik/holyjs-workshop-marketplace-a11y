import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'
import { List, ListItem } from 'uikit/components'

import MenuItem from './MenuItem'

import './Menu.scss'

const Menu = () => {
  const { wishlistCount, cartCount } =
    useContext(AppContext)

  return (
    <nav
      className="Header-Menu"
      aria-label="Меню"
    >
      <List className="Header-MenuList">
        <ListItem>
          <MenuItem
            text="Вишлист"
            url="/wishlist"
            count={wishlistCount}
          />
        </ListItem>
        <ListItem>
          <MenuItem
            text="Корзина"
            url="/cart"
            count={cartCount}
          />
        </ListItem>
      </List>
    </nav>
  )
}

export default Menu
