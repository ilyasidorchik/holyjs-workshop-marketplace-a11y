import { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { AppContext } from 'hooks/useContextData'
import { List, ListItem } from 'uikit/components'

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
        <List className="TouchSearchPage-List">
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

export default TouchSearchPage
