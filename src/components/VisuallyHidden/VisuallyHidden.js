import cx from 'classnames'

import './VisuallyHidden.scss'

const VisuallyHidden = ({
  className,
  children
}) => {
  return (
    <div className={cx('VisuallyHidden', className)}>
      {children}
    </div>
  );
};

export default VisuallyHidden
