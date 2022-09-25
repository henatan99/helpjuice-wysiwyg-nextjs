import { render } from '@testing-library/react'
import Main from '../src/components/Main'

it('renders main unchanged', () => {
  const { container } = render(<Main />)
  expect(container).toMatchSnapshot()
})