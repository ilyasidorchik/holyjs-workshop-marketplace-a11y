import cx from 'classnames'

import { Title } from 'uikit/components'

import { useShowByHotkey } from './hooks/useShowByHotkey'
import './SkipToContent.scss'

const SkipToContent = ({ className }) => {
  const { visible, firstLinkRef, onBlur } =
    useShowByHotkey()

  return (
    <div
      className={cx(
        'SkipToContent',
        {
          SkipToContent_visible: visible,
        },
        className
      )}
      role="dialog"
      onBlur={onBlur}
    >
      <Title>
        Перейти к содержанию (Alt + 0)
      </Title>
      <div>
        <a
          className="Link"
          href="#filters"
          ref={firstLinkRef}
        >
          Фильтры
        </a>
         
        <a className="Link" href="#results">
          Результаты поиска
        </a>
      </div>
    </div>
  )
}

export default SkipToContent
