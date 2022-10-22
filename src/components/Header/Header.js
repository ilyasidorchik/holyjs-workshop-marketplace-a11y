import { TextField } from 'uikit/components'

import Menu from './Menu'

import './Header.scss'

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-LeftColumn">
        <div>
          <b>
            <i>
              Холи
              <br />
              Маркет
            </i>
          </b>
        </div>

        <form action="/search">
          <TextField placeholder="Найти товары" />
        </form>
      </div>

      <Menu />
    </div>
  )
}

export default Header
