import cx from 'classnames'

import { Icons } from './icons'

import './Icon.scss'

const buildAriaAttributes = (
  ariaLabel,
  ariaHidden = true
) => {
  const ariaAttributes = {
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden,
  }

  if (ariaLabel) {
    delete ariaAttributes['aria-hidden']
  }

  return ariaAttributes
}

const Icon = ({
  name,
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = true,
}) => {
  const Component = Icons[name]

  if (!Component) {
    return null
  }

  const ariaAttributes = buildAriaAttributes(
    ariaLabel,
    ariaHidden
  )

  return (
    <div
      className={cx('Icon', className)}
      role="img"
      {...ariaAttributes}
    >
      <Component />
    </div>
  )
}

export default Icon
