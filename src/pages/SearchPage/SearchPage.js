import { useContext } from 'react'

import { AppContext } from 'hooks/useContextData'

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

      <div>
        {search.data.map((item) => (
          <Snippet key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default SearchPage
