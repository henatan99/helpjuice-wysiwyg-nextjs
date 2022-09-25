import { render } from '@testing-library/react'
import Header from '../src/components/Header'

it('renders header unchanged', () => {
  const { container } = render(<Header />)
  expect(container).toMatchSnapshot()
})