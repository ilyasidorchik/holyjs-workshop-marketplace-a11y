import cx from 'classnames'

import './Tooltip.scss'

const Tooltip = ({
  className,
  visible = true,
}) => {
  return (
    <div
      className={cx(
        'Tooltip',
        {
          Tooltip_visible: visible,
        },
        className
      )}
    >
      <span>Добавить в Избранное</span>
      <div class="Tooltip-Tail">
        <svg
          viewBox="0 0 24 24"
          class="Tooltip-TailSvg"
        >
          <path
            class="Tooltip-TailFill"
            d="M12 16C15 16 18 24 24 24H0C6 24 9 16 12 16Z"
            fill="none"
          ></path>
          <path
            class="Tooltip-TailBorder"
            d="M8.05888 18.9807C6.77697 20.3966 5.32977 21.9951 3.57172 23H0C2.53449 23 4.52121 21.3153 6.39546 19.3161C6.68742 19.0046 6.98315 18.6782 7.27806 18.3526L7.27807 18.3526C7.87384 17.6949 8.46631 17.0408 9.01776 16.5218C9.82327 15.7637 10.827 15 12 15C13.173 15 14.1767 15.7637 14.9822 16.5218C15.5337 17.0408 16.1262 17.6949 16.7219 18.3526L16.7219 18.3526L16.7222 18.3529C17.017 18.6783 17.3127 19.0047 17.6045 19.3161C19.4788 21.3153 21.4655 23 24 23H20.4283C18.6702 21.9951 17.223 20.3966 15.9411 18.9807C14.4853 17.3726 13.2426 16 12 16C10.7574 16 9.51472 17.3726 8.05888 18.9807Z"
            fill="none"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Tooltip
