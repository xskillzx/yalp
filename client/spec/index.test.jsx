import React from 'react';
import ReactDOM from 'react-dom';
import { render, shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import SignUp from '../src/components/SignUp.jsx';




test('SignUp should render a Sign-Up title', () => {

  const signup = shallow(<SignUp />);

  expect(signup.text()).toEqual('Sign-Up:Sign-Up');
});
