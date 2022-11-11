import { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { AppContext } from 'hooks/useContextData'
import { List, ListItem } from 'uikit/components'
import { VisuallyHidden } from 'components'

import Snippet from './components/Snippet'
import Filters from './Filters'

import './SearchPage.scss'

const SearchPage = () => {
  const { search } = useContext(AppContext)

  return (
    <div className="SearchPage App-Layout">
      <Helmet>
        <title>Результаты поиска</title>
      </Helmet>

      <div id="filters">
        <VisuallyHidden>
          <h2>Фильтры</h2>
        </VisuallyHidden>
        <Filters />
      </div>

      <div id="results">
        <VisuallyHidden>
          <h2>Результаты поиска</h2>
        </VisuallyHidden>

        <List>
          {search.data.map((item) => (
            <ListItem key={item.id}>
              <Snippet {...item} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

export default SearchPage
