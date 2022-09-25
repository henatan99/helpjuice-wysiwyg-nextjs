import { render } from '@testing-library/react'
import Editor from '../src/components/Editor'

it('renders editor unchanged', () => {
  const { container } = render(<Editor />)
  expect(container).toMatchSnapshot()
})