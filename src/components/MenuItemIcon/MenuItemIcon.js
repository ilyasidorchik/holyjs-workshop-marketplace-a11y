import cx from 'classnames'

import { ReactComponent as wishlist } from './assets/heart-outline.svg'
import { ReactComponent as cart } from './assets/cart.svg'

import './MenuItemIcon.scss'

const Icons = {
  '/wishlist': wishlist,
  '/cart': cart,
}

const MenuItemIcon = ({
  url,
  count,
  className,
  iconClassName,
}) => {
  const Count = count ? (
    <span className="MenuItemCount">{count}</span>
  ) : null
  const IconComponent = Icons[url]

  return (
    <span
      className={cx('MenuItemIcon', className)}
    >
      {Count}
      <IconComponent
        className={cx(
          'MenuItemIconSvg',
          iconClassName
        )}
      />
    </span>
  )
}

export default MenuItemIcon
