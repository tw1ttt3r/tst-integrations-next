/**
 * @jest-environment jsdom
*/

import { render } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {

    const component = render(<Home />);

    component.getByText('Componente Funcionando V3')
    
  })
});