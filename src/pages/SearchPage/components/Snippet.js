import { useState, useContext } from 'react'

import { AppContext } from 'hooks/useContextData'

import Picture from './assets/t-shirt.png'

import {
  Price,
  OldPrice,
  Discount,
} from 'components'
import {
  Title,
  Button,
  Link,
  Image,
} from 'uikit/components'

import UpsalePopup from './UpsalePopup'

import './Snippet.scss'

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

  return (
    <>
      <div className="Snippet">
        <div className="Snippet-Toolbar">
          <Button
            view="secondary"
            onClick={onWishlistAdd}
          >
            ❤
          </Button>
        </div>
        <Image
          className="Snippet-Picture"
          src={Picture}
          alt={title}
        />
        <div className="Snippet-Desc">
          <div className="Snippet-DescText">
            <Title>
              <Link
                className="Snippet-Link"
                to="/product"
              >
                {title}
              </Link>
            </Title>
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
              <div>{rating}</div> /
              <div>{feedbackCount}</div>
            </div>
          </div>

          <Button
            className="Snippet-Button"
            onClick={onCartAdd}
          >
            В корзину
          </Button>
        </div>
      </div>

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
