import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './originalApp'

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(document.body.contains(linkElement))
  })
})
