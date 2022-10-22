import cx from 'classnames'

import './Rating.scss'

// const MAX_RATING = 5

const Rating = ({
  className,
  as: Component = 'div',
  value,
}) => {
  return (
    <Component
      className={cx('Rating', className)}
    >
      {value}
    </Component>
  )
}

export default Rating
