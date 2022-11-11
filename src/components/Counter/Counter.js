import cx from 'classnames'

import { Button as LegacyButton } from 'uikit/components'

import './Counter.scss'

const Counter = ({
  className,
  value = 0,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className={cx('Counter', className)}>
      <LegacyButton
        view="secondary"
        disabled={value < 1}
        onClick={onDecrement}
        // Представим, aria-label не прокинется
      >
        <span aria-label="Уменьшить">−</span>
      </LegacyButton>

      <div>{value}</div>

      <LegacyButton
        view="secondary"
        onClick={onIncrement}
        // Представим, aria-label не прокинется
      >
        <span aria-label="Увеличить">+</span>
      </LegacyButton>
    </div>
  )
}

export default Counter
