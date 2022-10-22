import cx from 'classnames'

import './List.scss'

export const List = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={cx('List', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export const ListItem = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={cx('ListItem', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
