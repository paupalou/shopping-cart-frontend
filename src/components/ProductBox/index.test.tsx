import React from 'react';
import { shallow } from 'enzyme';

import ProductBox from '.';

describe('ProductBox', () => {
  it('Renders without errors', () => {
    const props = {
      increment: jest.fn(),
      decrement: jest.fn(),
      quantity: 1,
      name: 'product',
      customerPrice: 50
    };

    shallow(<ProductBox {...props} />);
  });

  it('Renders a disabled decrement button if quantity is 0', () => {
    const props = {
      increment: jest.fn(),
      decrement: jest.fn(),
      quantity: 0,
      name: 'product',
      customerPrice: 50
    };
    const wrapper = shallow(<ProductBox {...props} />);

    expect(
      wrapper.find('button[data-test-id="decrement"]').prop('disabled')
    ).toBe(true);
  });

  it('Calls increment handler when increment button clicked', () => {
    const props = {
      increment: jest.fn(),
      decrement: jest.fn(),
      quantity: 2,
      name: 'product',
      customerPrice: 50
    };
    const wrapper = shallow(<ProductBox {...props} />);
    wrapper.find('button[data-test-id="increment"]').simulate('click');

    expect(props.increment).toHaveBeenCalled();
  });


  it('Calls decrement handler when increment button clicked', () => {
    const props = {
      increment: jest.fn(),
      decrement: jest.fn(),
      quantity: 2,
      name: 'product',
      customerPrice: 50
    };
    const wrapper = shallow(<ProductBox {...props} />);
    wrapper.find('button[data-test-id="decrement"]').simulate('click');

    expect(props.decrement).toHaveBeenCalled();
  });
});
