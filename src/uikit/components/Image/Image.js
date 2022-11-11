import cx from 'classnames'

import './Image.scss'

const Image = ({
  className,
  src,
  alt = '',
  'aria-hidden': ariaHidden,
}) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img
    className={cx('Image', className)}
    src={src}
    alt={alt}
    aria-hidden={ariaHidden}
  />
)

export default Image
