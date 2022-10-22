import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'
import { List, ListItem } from 'uikit/components'

import MenuItem from './MenuItem'

import './Menu.scss'

const Menu = () => {
  const { wishlistCount, cartCount } =
    useContext(AppContext)

  return (
    <div className="Header-Menu">
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
    </div>
  )
}

export default Menu
