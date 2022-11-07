import { useState, useContext } from 'react'

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

import UpsalePopup from './UpsalePopup'

import './Snippet.scss'
import Tooltip from './Tooltip'

const Snippet = ({
  id,
  title,
  price,
  oldPrice,
  discount,
  rating,
  feedbackCount,
}) => {
  const { addToCart, addToWishlist } =
    useContext(AppContext)

  const [visible, isVisible] = useState(false)
  const togglePopup = (e) => {
    // e.preventDefault()
    isVisible(!visible)
  }
  const onCartAdd = (e) => {
    e.preventDefault()
    addToCart()
    togglePopup()
  }

  const onWishlistAdd = (e) => {
    e.preventDefault()
    addToWishlist()
  }

  const [visibleHint, isVisibleHint] =
    useState(false)
  const showHint = () => {
    isVisibleHint(true)
  }
  const hideHint = () => {
    isVisibleHint(false)
  }

  return (
    <>
      <Link to="/product">
        <div className="Snippet">
          <img
            className="Snippet-Picture"
            src={Picture}
            alt={title}
            aria-hidden={true}
          />
          <div className="Snippet-Desc">
            <Title>{title}</Title>
            <div className="Snippet-PriceInfo">
              <Price
                value={price}
                currency="RUR"
              />
              {oldPrice && (
                <div className="Snippet-PriceInfo">
                  <OldPrice
                    value={oldPrice}
                    currency="RUR"
                  />
                  {discount && (
                    <Discount
                      percent={discount}
                    />
                  )}
                </div>
              )}
            </div>

            <div className="Snippet-Shop">
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

          <div className="Snippet-Toolbar">
            <Button
              className="Snippet-ToolbarButton"
              view="secondary"
              onClick={onWishlistAdd}
              onMouseOver={showHint}
              // onFocus={showHint}
              onMouseOut={hideHint}
              // onLbur={hideHint}
            >
              ❤
            </Button>
            <Tooltip
              className="Snippet-Tooltip"
              visible={visibleHint}
            />
          </div>
        </div>
      </Link>

      {id === 0 && (
        <UpsalePopup
          visible={visible}
          onClose={togglePopup}
        />
      )}
    </>
  )
}

export default Snippet
