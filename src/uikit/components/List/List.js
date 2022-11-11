import cx from 'classnames'

import './List.scss'

export const List = ({
  className,
  children,
  ...rest
}) => {
  return (
    <ul
      className={cx('List', className)}
      {...rest}
    >
      {children}
    </ul>
  )
}

export const ListItem = ({
  className,
  children,
  ...rest
}) => {
  return (
    <li
      className={cx('ListItem', className)}
      {...rest}
    >
      {children}
    </li>
  )
}
