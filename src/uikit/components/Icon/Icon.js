import cx from 'classnames'

import { Icons } from './icons'

import './Icon.scss'

const Icon = ({ name, className }) => {
  const Component = Icons[name]

  if (!Component) {
    return null
  }

  return (
    <Component className={cx('Icon', className)} />
  )
}

export default Icon
