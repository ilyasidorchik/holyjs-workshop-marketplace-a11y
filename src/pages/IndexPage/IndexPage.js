import cx from 'classnames'

import { Title } from 'uikit/components'
import { Carousel } from 'components'

import './IndexPage.scss'

const IndexPage = ({ className }) => {
  return (
    <div
      className={cx(
        'IndexPage',
        'App-Layout',
        className
      )}
    >
      <div className="ProductPage-Row">
        <Title className="ProductPage-Title">
          На основе просмотров
        </Title>
        <Carousel />
      </div>

      <div className="ProductPage-Row">
        <Title className="ProductPage-Title">
          Может заинтересовать
        </Title>
        <Carousel />
      </div>

      <div className="ProductPage-Row">
        <Title className="ProductPage-Title">
          Может пригодиться
        </Title>
        <Carousel />
      </div>
    </div>
  )
}

export default IndexPage
