import {
  render,
  screen,
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import MenuItem from './MenuItem'

describe('MenuItem', () => {
  it('подписан для незрячего', () => {
    render(
      <MemoryRouter>
        <MenuItem
          text="Вишлист"
          url="/wishlist"
          count={3}
        />
      </MemoryRouter>
    )

    const status = screen.getByRole('status')
    const link = screen.getByRole('link')
    // const title = screen.getByRole('heading', {level: 2})

    expect(link).toHaveAccessibleName('Вишлист 3')
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
