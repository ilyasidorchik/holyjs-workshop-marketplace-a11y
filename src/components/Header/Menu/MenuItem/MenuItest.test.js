import {
  render,
  screen,
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import MenuItem from './MenuItem'

describe('MenuItem', () => {
  it('понятен для незрячих', () => {
    render(
      <MemoryRouter>
        <MenuItem
          url="/wishlist"
          text="Вишлист"
          count={3}
        />
      </MemoryRouter>
    )

    const link = screen.getByRole('link')

    expect(link).toHaveAccessibleName('Вишлист 3')
  })

  it('обновляется для незрячих', () => {
    render(
      <MemoryRouter>
        <MenuItem
          url="/wishlist"
          text="Вишлист"
          count={3}
        />
      </MemoryRouter>
    )

    const status = screen.getByRole('status')

    expect(status).toHaveAttribute(
      'aria-live',
      'polite'
    )
    expect(status).toHaveAttribute(
      'aria-atomic',
      'true'
    )
  })
})
