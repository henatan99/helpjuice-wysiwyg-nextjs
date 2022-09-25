import { render } from '@testing-library/react'
import ToolBar from '../src/components/ToolBar'

it('renders toolbar unchanged', () => {
  const { container } = render(<ToolBar />)
  expect(container).toMatchSnapshot()
})