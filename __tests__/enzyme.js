import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import LoginButton from '../client/components/LoginButton';
import Med from '../client/components/Med';
import MyMedList from '../client/components/MyMedList';
import MyMedsDisplay from '../client/components/MyMedsDisplay';
import OtcChecker from '../client/components/OtcChecker';
import SignupButton from '../client/components/SignupButton';
import SignupForm from '../client/components/SignupForm';
import HomeContainer from '../client/containers/HomeContainer';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

xdescribe('React unit tests', () => {
  // Testing the functionality of Login Button Component
  describe('LoginButton', () => {
    let wrapper;
    const props = {
      handleLoginSubmit: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(<LoginButton {...props} />);
    });

    it('Renders a <div> tag ', () => {
      expect(wrapper.type()).toEqual('div');
    });

    it('Renders two <p> tags and a <button> tag inside the <div> tag', () => {
      // finds 2 p tags within the component
      expect((wrapper.find('p').length)).toEqual(2);
      // find button 
      expect((wrapper.find('button').length)).toEqual(1);
      
    });

    it('Renders an input tag inside of each p tag', () => {
      const inputs = wrapper.find('input');
      inputs.forEach((node) => {
        expect(node.parent().is('p')).toBe(true);
      })
    });
    
    it('Button should invoke handleLoginSubmit', () => {
      wrapper.find('button').at(0).simulate('click');
      expect(props.handleLoginSubmit).toHaveBeenCalled();
    })
  });

  // Tests for Sign Up Button Component
  describe('SignupButton', () => {
    let wrapper;
    // TODO: Test the following:
    const props = {
      formHandleClick: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(<SignupButton {...props} />);
    });

    // 1. Main wrapper should be div
    it('The main wrapper should be a div', () => {
      expect(wrapper.type()).toEqual('div');
    });
    // 2. It should also contain a div with one button
    it('A button should exist within the main wrapper', () => {
      const buttons = wrapper.find('button');
      // console.log(buttons);
      expect(buttons.length).toBe(1);
      buttons.forEach((node) => {
        expect(node.parent().is('div')).toBe(true);
      });
    });
    // 3. The functions passed down should be invoked on click
    it('Clicking the button should invoke formHandleClick', () => {
      wrapper.find('button').at(0).simulate('click');
      expect(props.formHandleClick).toHaveBeenCalled();
    });
    
  });

  describe('Med', () => {
    // TODO: Test the following:
    let wrapper;
    const props = {
      medData: 'test',
    };

    beforeAll(() => {
      wrapper = shallow(<Med {...props} />);
    });

    // the main wrapper should be a div
    it('main wrapper should be a div', () => {
      expect(wrapper.type()).toEqual('div');
    });

    // the main div should have a child div
    it('main div should have a child div', () => {
      const mainDiv = wrapper.find('div').first();
      expect(mainDiv.children().is('div')).toBe(true);
      // expect(wrapper.find('div').length).toBe(1);
    });
    
    //  Div should render data from props medData  
    it('Child div should render data in props.medData', () => {
      const childDiv = wrapper.find('div').first().children();
      expect(childDiv.text()).toEqual('test');
    });
  });


  describe('MyMedList', () => {
    // TODO: Test the following:
    let wrapper;
    const props = {
      rxData: [{
        name: 'Philip'
      }],
      handleChange: jest.fn(),
      handleAddRx: jest.fn()
    };

    beforeAll(() => {
      wrapper = shallow(<MyMedList {...props} />);
    });

    // the main wrapper should be a div
    it('main wrapper should be a div', () => {
      expect(wrapper.type()).toEqual('div');
    });

    // the main div should have a child div, input, and button
    it('main div should have a child div, input, and button', () => {
      const mainDiv = wrapper.find('div').first();
      expect(mainDiv.children().at(0).is('div')).toBe(true);
      expect(mainDiv.children().at(1).is('input')).toBe(true);
      expect(mainDiv.children().at(2).is('button')).toBe(true);

      // expect(wrapper.find('div').length).toBe(1);
    });

    //  Div should render a Med component 
    it('Child div should render Med component', () => {
      // const childDiv = wrapper.find('Med').length;
      const med = wrapper.find('Med');
      expect(med.length).toBe(1);
      expect(med.parent().is('div')).toBe(true);
    });

    it('input onChange should invoke handleChange', () => {
      wrapper.find('input').at(0).simulate('change');
      expect(props.handleChange).toHaveBeenCalled();
    });

    it('add med button should invoke handleAddRx on click', () => {
      wrapper.find('button').simulate('click');
      expect(props.handleAddRx).toHaveBeenCalled();
    });
  });

  describe('OtcChecker', () => {
    let wrapper;
    global.fetch = jest.fn(() => {
      Promise.resolve({
        json: () => Promise.resolve(true) 
      });
    })

    global.alert = jest.fn();
    
    const state = {
      input: '',
      alert: null
    }

    beforeAll(() => {
      wrapper = shallow(<MyMedList {...props} />);
    });

    // the main wrapper should be a div
    it('main wrapper should be a div', () => {
      expect(wrapper.type()).toEqual('div');
    });

    it('div should have two child elements: input and button', () => {
      const mainDiv = wrapper.find('div');
      expect(mainDiv.children().at(0).is('input')).toBe(true);
      expect(mainDiv.children().at(1).is('button')).toBe(true);
    })
    
    it('clicking the button should invoke handleOtcSubmit', () => {
      const otcSubmitSpy = jest.spyOn(wrapper.instance(), 'handleOtcSubmit')
    })
    
    xit('input handleChange should change the state of the wrapper', () => {
      const spy = jest.spyOn(wrapper.instance(), 'handleChange')
    })



  });

});
