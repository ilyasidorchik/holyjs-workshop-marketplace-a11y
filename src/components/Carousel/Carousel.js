import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'
import {
  List,
  ListItem,
  Link,
  Button,
  Image,
} from 'uikit/components'

import './Carousel.css'

import ProductPicture from './assets/t-shirt.png'

const Carousel = () => {
  const { addToCart } = useContext(AppContext)

  const item = {
    title: 'Футболка HolyJS',
    img: ProductPicture,
    to: '/product',
    onClick: addToCart,
  }
  const data = new Array(3).fill(item)

  return (
    <List className="Carousel">
      {data.map(({ img, title, to, onClick }, i) => (
        <ListItem
          className="Carousel-Item"
          key={i}
        >
          <Image
            className="Carousel-ItemPicture"
            src={img}
          />
          <Link
            className="Carousel-ItemName"
            to={to}
          >
            {title}
          </Link>
          <Button
            view="secondary"
            onClick={onClick}
          >
            В корзину
          </Button>
        </ListItem>
      ))}
    </List>
  )
}

export default Carousel
