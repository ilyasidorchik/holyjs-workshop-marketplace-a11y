import cx from 'classnames'

import './Image.scss'

const Image = ({ className, src, alt }) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img
    className={cx('Image', className)}
    src={src}
    alt={alt}
  />
)

export default Image
