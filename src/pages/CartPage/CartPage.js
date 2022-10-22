import cx from 'classnames'

import { Title } from 'uikit/components'

import './CartPage.scss'

const CartPage = ({ className }) => {
  return (
    <div
      className={cx(
        'CartPage',
        'App-Layout',
        className
      )}
    >
      <Title size="l">Корзина</Title>
      <p>
        Скоро здесь будут товары, которые вы добавили
        в корзину
      </p>
    </div>
  )
}

export default CartPage
