import cx from 'classnames'

import { VisuallyHidden } from 'uikit/components'

import './Discount.scss'

const Discount = ({ className, percent }) => (
  <div className={cx('Discount', className)}>
    <VisuallyHidden>Скидка:</VisuallyHidden>
    <span aria-hidden="true">–</span>
    {percent}%
  </div>
)

export default Discount
