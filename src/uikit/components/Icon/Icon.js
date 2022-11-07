import cx from 'classnames'

import { Icons } from './icons'

import './Icon.scss'

const buildAriaAttributes = ({
  ariaLabel,
  ariaHidden,
}) => {
  const ariaAttributes = {
    'aria-hidden': ariaHidden,
    'aria-label': ariaLabel,
  }

  if (ariaLabel) {
    delete ariaAttributes['aria-hidden']
  }

  return ariaAttributes
}

const Icon = ({
  className,
  name,
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
}) => {
  const Component = Icons[name]

  if (!Component) {
    return null
  }

  const ariaAttributes = buildAriaAttributes({
    ariaLabel,
    ariaHidden,
  })

  return (
    <Component
      className={cx('Icon', className)}
      {...ariaAttributes}
    />
  )
}

export default Icon
