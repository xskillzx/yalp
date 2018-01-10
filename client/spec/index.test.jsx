import React from 'react';
import ReactDOM from 'react-dom';
import { render, shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../src/index.jsx';




test('App should render a Sign-Up title', () => {

  const app = shallow(<App />);

  expect(app.text()).toEqual('Sign-Up:Sign-Up');
});
