import cx from 'classnames'

import {
  Popup,
  Title,
  Button,
  Link,
} from 'uikit/components'

import './UpsalePopup.scss'

const UpsalePopup = ({
  className,
  visible,
  onClose,
}) => {
  if (!visible) {
    return null
  }

  return (
    <Popup
      className={cx('UpsalePopup', className)}
    >
      <Title className="UpsalePopup-Title">
        Товар добавлен в корзину
      </Title>
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
