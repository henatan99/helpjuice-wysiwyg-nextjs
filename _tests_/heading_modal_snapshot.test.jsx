import { render } from '@testing-library/react'
import HeadingModal from '../src/components/HeadingModal'

it('renders headingModal unchanged', () => {
  const { container } = render(<HeadingModal />)
  expect(container).toMatchSnapshot()
})