import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'

import Picture from './assets/t-shirt.png'

import {
  Price,
  OldPrice,
  Discount,
  Rating,
} from 'components'
import {
  Title,
  Button,
  Link,
  VisuallyHidden,
} from 'uikit/components'

import './TouchSnippet.scss'

const TouchSnippet = ({
  id,
  title,
  price,
  oldPrice,
  discount,
  rating,
  feedbackCount,
}) => {
  const { addToCart } = useContext(AppContext)

  const onCartAdd = (e) => {
    e.preventDefault()
    addToCart()
  }

  return (
    <div
      className="TouchSnippet"
      onClick={addToCart}
    >
      <img
        className="TouchSnippet-Picture"
        src={Picture}
        alt={title}
        aria-hidden={true}
      />
      <div className="TouchSnippet-Desc">
        <Title>
          <Link to="/product">{title}</Link>
        </Title>
        <div className="TouchSnippet-PriceInfo">
          <Price value={price} currency="RUR" />
          {oldPrice && (
            <div className="TouchSnippet-PriceInfo">
              <OldPrice
                value={oldPrice}
                currency="RUR"
              />
              {discount && (
                <Discount percent={discount} />
              )}
            </div>
          )}
        </div>

        <div className="TouchSnippet-Shop">
          <i>Холи</i> ·
          <Rating value={rating} />{' '}
          <span aria-hidden={true}>/</span>
          <div>
            <VisuallyHidden>
              Отзывы:
            </VisuallyHidden>
            {feedbackCount}
          </div>
        </div>

        <Button onClick={onCartAdd}>
          В корзину
        </Button>
      </div>
    </div>
  )
}

export default TouchSnippet
