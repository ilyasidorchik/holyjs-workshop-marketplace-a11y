import { useContext } from 'react'
import cx from 'classnames'

import { AppContext } from 'hooks/useContextData'
import { Counter } from 'components'
import {
  Popup,
  Title,
  Button,
  Link,
  Image,
} from 'uikit/components'

import Picture from '../Snippet/assets/t-shirt.png'

import './UpsalePopup.scss'

const UpsalePopup = ({
  className,
  visible,
  onClose,
}) => {
  const { cartCount, removeFromCart, addToCart } =
    useContext(AppContext)

  if (!visible) {
    return null
  }

  return (
    <Popup
      className={cx('UpsalePopup', className)}
    >
      <Title
        className="UpsalePopup-Title"
        size="m"
      >
        Товар добавлен в корзину
      </Title>

      <div className="UpsalePopup-Item">
        <Image
          className="UpsalePopup-Image"
          src={Picture}
        />
        <div className="UpsalePopup-ItemDesc">
          <Title className="UpsalePopup-ItemTitle">
            Футболка HolyJS
          </Title>
          <Counter
            value={cartCount}
            onDecrement={removeFromCart}
            onIncrement={addToCart}
          />
        </div>
      </div>

      <div className="UpsalePopup-Panel">
        <Button onClick={onClose}>
          Продолжить покупки
        </Button>
        <Link to="/cart">В корзину</Link>
      </div>
    </Popup>
  )
}

export default UpsalePopup
