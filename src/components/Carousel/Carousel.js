import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'
import { Link, Button } from 'uikit/components'

import './Carousel.css'

import ProductPicture from './assets/t-shirt.png'

const Carousel = () => {
  const { addToCart } = useContext(AppContext)

  return (
    <div className="Carousel">
      <div className="Carousel-Item">
        <img
          className="Carousel-ItemPicture"
          src={ProductPicture}
          alt="Футболка HolyJS"
        />
        <Link
          className="Carousel-ItemName"
          to="/product"
        >
          Футболка HolyJS
        </Link>
        <Button
          view="secondary"
          onClick={addToCart}
        >
          В корзину
        </Button>
      </div>
      <div className="Carousel-Item">
        <img
          className="Carousel-ItemPicture"
          src={ProductPicture}
          alt="Футболка HolyJS"
          aria-hidden={true}
        />
        <div className="Carousel-ItemName">
          Футболка HolyJS
        </div>
        <Button
          view="secondary"
          onClick={addToCart}
        >
          В корзину
        </Button>
      </div>
      <div className="Carousel-Item">
        <img
          className="Carousel-ItemPicture"
          src={ProductPicture}
          alt="Футболка HolyJS"
        />
        <div className="Carousel-ItemName">
          Футболка HolyJS
        </div>
        <Button
          view="secondary"
          onClick={addToCart}
        >
          В корзину
        </Button>
      </div>
    </div>
  )
}

export default Carousel
