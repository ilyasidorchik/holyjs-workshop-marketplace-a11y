import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'
import { List, ListItem, VisuallyHidden } from 'uikit/components'

import Filters from './Filters'
import Snippet from './components/Snippet'

import './SearchPage.scss'

const SearchPage = () => {
  const { search } = useContext(AppContext)

  return (
    <div className="SearchPage App-Layout">
      <div id="filters">
        <VisuallyHidden  as="h2">
          Фильтры
        </VisuallyHidden>
        <Filters />
      </div>

      <List id="results">
        {search.data.map((item) => (
          <ListItem key={item.id}>
            <Snippet {...item} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default SearchPage
