import { useContext } from 'react'

import {
  Price,
  OldPrice,
  Discount,
  Carousel,
} from 'components'
import {
  Title,
  Link,
  Button,
  Icon,
} from 'uikit/components'

import { AppContext } from 'hooks/useContextData'

import ProductPicture from './assets/t-shirt.png'

import './ProductPage.scss'

const ProductPage = () => {
  const { addToCart } = useContext(AppContext)

  return (
    <main className="ProductPage">
      <div className="App-Layout ProductPage-Breadcrumbs">
        <Link to="/search">Футболки</Link> ·{' '}
        <Link to="/search">Холи</Link>
      </div>
      <div className="ProductPage-Layout App-Layout">
        <Title
          className="ProductPage-Title"
          size="l"
        >
          Футболка HolyJS
        </Title>
      </div>
      <div className="ProductPage-Layout App-Layout">
        <div>
          <div className="ProductPage-Show">
            <img
              className="ProductPage-Picture"
              src={ProductPicture}
              alt="Футболка HolyJS"
            />
            <div className="ProductPage-Desc">
              <Title className="ProductPage-Title">
                Коротко о товаре
              </Title>
              <p className="ProductPage-Text">
                Футболка сделана
                из высококачест-венного хлопка.
                Когда прикосаешься к ней,
                ты вспоминаешь то время, когда
                только открывал для себя мир
                Javascript.
              </p>
            </div>
          </div>
          <div className="ProductPage-Row">
            <Title className="ProductPage-Title">
              Покупают с этим товаром
            </Title>
            <Carousel />
          </div>
          <div className="ProductPage-Row">
            <Title className="ProductPage-Title">
              Вы недавно смотрели
            </Title>
            <Carousel />
          </div>
          <div className="ProductPage-Row">
            <Title className="ProductPage-Title ProductPage-Title_withIcon">
              <Icon name="desc" /> Описание
            </Title>
            <div>
              <p className="ProductPage-Text ProductPage-DescText">
                Футболка сделана
                из высоко-качественного хлопка.
                Когда ты её ты трогаешь,
                ты вспоминаешь то время, когда
                только открывал для себя мир
                Javascript.
              </p>
              <p className="ProductPage-Text ProductPage-DescText">
                Футболка сделана
                из высоко-качественного хлопка.
                Когда ты её ты трогаешь,
                ты вспоминаешь то время, когда
                только открывал для себя мир
                Javascript.
              </p>
              <p className="ProductPage-Text ProductPage-DescText">
                Футболка сделана
                из высоко-качественного хлопка.
                Когда ты её ты трогаешь,
                ты вспоминаешь то время, когда
                только открывал для себя мир
                Javascript.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="ProductPage-List">
            <div className="ProductPage-ListItem ProductPage-ListItem_default">
              <div>
                <div className="ProductPage-OldPriceInfo">
                  <OldPrice
                    value={5000}
                    currency="RUR"
                  />
                  <Discount percent={30} />
                </div>
                <Price
                  className="ProductPage-Price"
                  value={3000}
                  currency="RUR"
                />
                <div className="ProductPage-Shop">
                  <Icon name="shop" />
                  <i>Холи</i>
                </div>
                <Button onClick={addToCart}>
                  Добавить в корзину
                </Button>
              </div>
            </div>
            <div className="ProductPage-ListItem">
              <div>
                <div>3500 ₽</div>
                <div className="ProductPage-Shop">
                  <Icon name="shop" />
                  <i>Футли</i>
                </div>
                <Button
                  view="secondary"
                  onClick={addToCart}
                >
                  В корзину
                </Button>
              </div>
            </div>
            <div className="ProductPage-ListItem">
              <div>
                <div>4000 ₽</div>
                <div className="ProductPage-Shop">
                  <Icon name="shop" />
                  <i>Ти-шёртс</i>
                </div>
                <Button
                  view="secondary"
                  onClick={addToCart}
                >
                  В корзину
                </Button>
              </div>
            </div>
            <div className="ProductPage-ListItem">
              <div>
                <div>4500 ₽</div>
                <div className="ProductPage-Shop">
                  <Icon name="shop" />
                  <i>Футбонтико</i>
                </div>
                <Button
                  view="secondary"
                  onClick={addToCart}
                >
                  В корзину
                </Button>
              </div>
            </div>
            <div className="ProductPage-ListItem">
              <div>
                <div>5000 ₽</div>
                <div className="ProductPage-Shop">
                  <Icon name="shop" />
                  <i>Тишки</i>
                </div>
                <Button
                  view="secondary"
                  onClick={addToCart}
                >
                  В корзину
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductPage
