import cx from 'classnames'
import { Title } from 'uikit/components'

import './WishlistPage.scss'

const WishlistPage = ({ className }) => {
  return (
    <div
      className={cx(
        'WishlistPage',
        'App-Layout',
        className
      )}
    >
      <Title size="l">Вишлист</Title>
      <p>
        Скоро здесь будут товары, которые
        вам понравились
      </p>
    </div>
  )
}

export default WishlistPage
