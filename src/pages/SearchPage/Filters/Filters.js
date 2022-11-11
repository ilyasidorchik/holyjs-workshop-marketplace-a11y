import { useContext } from 'react'
import cx from 'classnames'

import {
  FilterTitles,
  FilterText,
} from 'constants/'
import { AppContext } from 'hooks/useContextData'
import {
  Title,
  Radio,
  Checkbox,
} from 'uikit/components'

import './Filters.scss'

const FilterComponent = {
  radio: Radio,
  checkbox: Checkbox,
}

const Filters = ({ className }) => {
  const { search, onFilterChange } =
    useContext(AppContext)
  const { filters } = search

  if (!filters) {
    return null
  }

  return (
    <div className={cx('Filters', className)}>
      {Object.keys(filters).map((name) => (
        <div
          className="SearchPage-Filter"
          key={name}
        >
          <Title className="SearchPage-FilterTitle" as="h3">
            {FilterTitles[name]}
          </Title>

          <div className="SearchPage-FilterOptions">
            {filters[name].values.map((value) => {
              const { type } = filters[name]
              const Component =
                FilterComponent[type]

              return (
                <Component
                  name={name}
                  value={value}
                  text={FilterText[name][value]}
                  defaultChecked={value === 'any'}
                  onChange={onFilterChange}
                  key={value}
                />
              )
            })}
          </div>
        </div>
      ))}
      остальные фильтры скоро
    </div>
  )
}

export default Filters
