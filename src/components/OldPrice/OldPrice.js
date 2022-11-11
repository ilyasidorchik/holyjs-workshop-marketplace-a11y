import cx from 'classnames'

import Price from 'components/Price'
import VisuallyHidden from 'components/VisuallyHidden'

const OldPrice = ({
  className,
  value,
  currency,
}) => (
  <>
    <VisuallyHidden>вместо</VisuallyHidden>
    <Price
      className={cx('OldPrice', className)}
      as="del"
      value={value}
      currency={currency}
    />
  </>
)

export default OldPrice
