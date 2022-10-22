import { Link } from 'uikit/components'

import MenuItemIcon from 'components/MenuItemIcon'

import './MenuItem.scss'

const MenuItem = ({ url, text, count }) => (
  <Link className="Header-MenuItem" to={url}>
    <MenuItemIcon url={url} count={count} />

    <span className="Header-MenuItemText">
      {text}
    </span>
  </Link>
)

export default MenuItem
