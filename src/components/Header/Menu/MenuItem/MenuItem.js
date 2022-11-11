import { Link } from 'uikit/components'

import MenuItemIcon from 'components/MenuItemIcon'
import VisuallyHidden from 'components/VisuallyHidden'

import './MenuItem.scss'

const MenuItem = ({ url, text, count }) => (
  <span
    role="status"
    aria-live="polite"
    aria-atomic="true"
  >
    <Link className="Header-MenuItem" to={url}>
      <MenuItemIcon url={url} count={count} />

      <span className="Header-MenuItemText">
        {text}
        <VisuallyHidden>
          {count || ''}
        </VisuallyHidden>
      </span>
    </Link>
  </span>
)

export default MenuItem
