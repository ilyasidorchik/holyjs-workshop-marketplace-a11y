import { useContext, useState } from 'react'
import cx from 'classnames'

import { AppContext } from 'hooks/useContextData'

import { Button, Link } from 'uikit/components'
import MenuItemIcon from 'components/MenuItemIcon'

import SidebarMenu from './components/SidebarMenu'

import './TouchHeader.scss'

const TouchHeader = ({ className }) => {
  const [visible, isVisible] = useState(false)
  const { cartCount } = useContext(AppContext)

  const toggleMenu = () => {
    isVisible(!visible)
  }

  return (
    <div
      className={cx(
        'TouchHeader App-Layout',
        className
      )}
    >
      <Button
        className="TouchHeader-SidebarButton"
        onClick={toggleMenu}
      >
        ≡
      </Button>

      <div>
        <b>
          <i>
            Холи
            <br />
            Маркет
          </i>
        </b>
      </div>

      <Link to="/cart">
        <MenuItemIcon
          className="TouchHeader-MenuItem"
          iconClassName="TouchHeader-CartIcon"
          url="/cart"
          count={cartCount}
        />
      </Link>

      {visible && (
        <SidebarMenu
          visible={visible}
          onClose={toggleMenu}
        />
      )}
    </div>
  )
}

export default TouchHeader
