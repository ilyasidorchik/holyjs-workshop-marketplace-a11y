import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'
import { List, ListItem } from 'uikit/components'

import Filters from './Filters'
import Snippet from './components/Snippet'

import './SearchPage.scss'

const SearchPage = () => {
  const { search } = useContext(AppContext)

  return (
    <div className="SearchPage App-Layout">
      <div>
        <Filters />
      </div>

      <List>
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
