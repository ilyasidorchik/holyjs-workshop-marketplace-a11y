import { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { AppContext } from 'hooks/useContextData'
import { VisuallyHidden } from 'uikit/components'

import Filters from './Filters'
import Snippet from './components/Snippet'

import './SearchPage.scss'

const SearchPage = () => {
  const { search } = useContext(AppContext)
  const text = 'Футболка HolyJS'

  return (
    <div className="SearchPage App-Layout">
      <Helmet>
        <title>
          Результаты поиска по запросу: {text}
        </title>
      </Helmet>
      <div id="filters">
        <VisuallyHidden as="h2">
          Фильтры
        </VisuallyHidden>
        <Filters />
      </div>

      <div id="result">
        <VisuallyHidden as="h2">
          Результаты поиска
        </VisuallyHidden>

        <ul className="SearchPage-List">
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

export default SearchPage
