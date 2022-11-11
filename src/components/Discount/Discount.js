import cx from 'classnames'
import VisuallyHidden from 'components/VisuallyHidden'

import './Discount.scss'

const Discount = ({ className, percent }) => (
  <>
    <VisuallyHidden>Скидка:</VisuallyHidden>
    <div className={cx('Discount', className)}>
      <span aria-hidden="true">–</span>
      {percent}%
    </div>
  </>
)

export default Discount
