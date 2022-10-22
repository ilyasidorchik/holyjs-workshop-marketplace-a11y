import cx from 'classnames'

import { Icons } from './icons'

import './Icon.scss'

const Icon = ({ name, className }) => {
  const Component = Icons[name]

  if (!Component) {
    return null
  }

  return (
    <div className={cx('Icon', className)}>
      <Component />
    </div>
  )
}

export default Icon
