import cx from 'classnames'
import VisuallyHidden from 'components/VisuallyHidden'

import './Rating.scss'

const MAX_RATING = 5

const Rating = ({
  className,
  as: Component = 'div',
  value,
}) => {
  return (
    <>
      <VisuallyHidden>Рейтинг:</VisuallyHidden>
      <Component
        className={cx('Rating', className)}
      >
        {value}
      </Component>
      <VisuallyHidden>
        из {MAX_RATING}
      </VisuallyHidden>
    </>
  )
}

export default Rating
