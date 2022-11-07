import cx from 'classnames'

import {
  Link,
  Title,
  VisuallyHidden,
} from 'uikit/components'

import { useShowByHotkey } from './hooks/useShowByHotkey'

import './SkipToContent.scss'

const SkipToContent = ({ className }) => {
  const { visible, firstLinkRef, onBlur } =
    useShowByHotkey()

  const shortcutText = (
    <>
      <VisuallyHidden>Шорткат:</VisuallyHidden>
      (Alt + 0)
    </>
  )

  return (
    <div
      className={cx(
        'SkipToContent',
        {
          SkipToContent_visible: visible,
        },
        className
      )}
      onBlur={onBlur}
    >
      <Title>
        Перейти к содержанию {shortcutText}
      </Title>
      <Link innerRef={firstLinkRef} to="#filters">
        Фильтры
      </Link>{' '}
      · 
      <Link to="#result">Результаты поиска</Link>
    </div>
  )
}

export default SkipToContent
