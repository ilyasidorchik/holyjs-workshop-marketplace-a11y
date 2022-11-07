import cx from 'classnames'

import { VisuallyHidden } from 'uikit/components'

import './Rating.scss'

const MAX_RATING = 5

const Rating = ({
  className,
  as: Component = 'div',
  value,
}) => {
  return (
    <Component
      className={cx('Rating', className)}
    >
      <VisuallyHidden>Рейтинг:</VisuallyHidden>
      {value}
      <VisuallyHidden>
        из {MAX_RATING}
      </VisuallyHidden>
    </Component>
  )
}

export default Rating
