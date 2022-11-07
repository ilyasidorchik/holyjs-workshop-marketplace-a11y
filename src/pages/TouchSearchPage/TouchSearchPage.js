import { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { AppContext } from 'hooks/useContextData'
import { VisuallyHidden } from 'uikit/components'

import Snippet from './TouchSnippet'

import './TouchSearchPage.scss'

const TouchSearchPage = () => {
  const { search } = useContext(AppContext)
  const text = 'Футболка HolyJS'

  return (
    <div className="TouchSearchPage App-Layout">
      <Helmet>
        <title>
          Результаты поиска по запросу: {text}
        </title>
      </Helmet>
      <div id="result">
        <VisuallyHidden as="h2">
          Результаты поиска
        </VisuallyHidden>

        <ul className="TouchSearchPage-List">
          {search.data.map((item) => (
            <li>
              <Snippet key={item.id} {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TouchSearchPage
