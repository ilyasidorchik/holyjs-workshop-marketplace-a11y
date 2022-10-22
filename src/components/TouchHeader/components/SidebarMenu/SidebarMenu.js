import cx from 'classnames'

import { Link, Popup } from 'uikit/components'

import './SidebarMenu.scss'

const SidebarMenu = ({ className }) => {
  return (
    <Popup
      className={cx('SidebarMenu', className)}
    >
      <Link
        className="SidebarMenu-Link"
        to="/touch/wishlist"
      >
        Вишлист
      </Link>
      <Link
        className="SidebarMenu-Link"
        to="/touch/wishlist"
      >
        Корзина
      </Link>
      <p>остальные пункты скоро</p>
    </Popup>
  )
}

export default SidebarMenu
