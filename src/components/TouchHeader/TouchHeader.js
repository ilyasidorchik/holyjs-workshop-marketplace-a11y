import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import cx from 'classnames'

import { AppContext } from 'hooks/useContextData'

import { Button, Link } from 'uikit/components'
import MenuItemIcon from 'components/MenuItemIcon'

import SidebarMenu from './components/SidebarMenu'

import './TouchHeader.scss'

const TouchHeader = ({ className }) => {
  const [visible, isVisible] = useState(false)
  const { cartCount } = useContext(AppContext)

  const location = useLocation()
  const isTouch =
    location.pathname.includes('touch')
  let badCodeLink = `/touch/search`
  if (isTouch) {
    badCodeLink += '-fixed'
  }

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
        <Link to={badCodeLink}>
          <b>
            <i>
              Холи
              <br />
              Маркет
            </i>
          </b>
        </Link>
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
