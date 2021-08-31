import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import LabeledText from '../client/components/LabeledText';
import Market from '../client/components/Market';
import MarketsDisplay from '../client/components/MarketsDisplay';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('LabeledText', () => {
    let wrapper;
    const props = {
      label: 'Mega',
      text: 'Markets',
    };

    beforeAll(() => {
      wrapper = shallow(<LabeledText {...props} />);
    });

    it('Renders a <p> tag with the label in bold', () => {
      expect(wrapper.type()).toEqual('p');
      expect(wrapper.text()).toEqual('Mega: Markets');
      expect(wrapper.find('strong').text()).toMatch('Mega');
    });
  });

  describe('Market', () => {
    let wrapper;
    // TODO: Test the following:
    const props = {
      index: 69,
      location: 'Mars',
      cards: 420,
      percentage: 45,
      addCard: () => { props.cards += 1; },
      deleteCard: () => { props.cards -= 1; },
    };

    beforeAll(() => {
      wrapper = shallow(<Market {...props} />);
    });

    // 1. A Market should display all of its text props inside a LabeledText component
    it('should display all of its text props inside a LabeledText component', () => {
      expect(wrapper.contains(<LabeledText label="Market ID" text={props.index} />)).toBe(true);
      expect(wrapper.contains(<LabeledText label="Location" text={props.location} />)).toBe(true);
      expect(wrapper.contains(<LabeledText label="Cards" text={props.cards} />)).toBe(true);
      expect(wrapper.contains(<LabeledText label="% of total" text={props.percentage} />)).toBe(true);
    });
    // 2. It should also contain a div with two buttons
    it('It should also contain a div with two buttons', () => {
      const buttons = wrapper.find('button');
      console.log(buttons);
      expect(buttons.length).toBe(2);
      buttons.forEach((node) => {
        expect(node.parent().is('div')).toBe(true);
      });
    });
    // 3. The functions passed down should be invoked on click
    it('The functions passed down should be invoked on click', () => {
      wrapper.find('button.addCard').invoke('onClick')();
      expect(props.cards).toEqual(421);
      wrapper.find('button.deleteCard').invoke('onClick')();
      expect(props.cards).toEqual(420);
      props.cards = 69;
      wrapper.find('button.deleteCard').invoke('onClick')();
      expect(props.cards).toEqual(68);
      wrapper.find('button.addCard').invoke('onClick')();
      expect(props.cards).toEqual(69);
    });
    // 4. Market should render a div with a class of `marketBox`, and the
    // interior div wrapping the two buttons should have a class of `flex`
    it('Market should render a div with class of `marketBox`. Interior div wrapping two buttons should have class of `flex`', () => {
      expect(wrapper.exists('div.marketBox')).toBe(true);
      expect(wrapper.find('div.flex').find('button').length).toBe(2);
      expect(wrapper.find('div.flex').parent().is('div')).toBe(true);
    });
  });

  describe('MarketsDisplay', () => {
    // TODO: Test the following:
    let wrapper;
    const props = {
      marketList: [{ location: 'Wright', cards: 10 }],
      key: 3,
      totalCards: 100,
      percentage: 69,
      index: 45,
      addCard: () => { props.cards += 1; },
      deleteCard: () => { props.cards -= 1; },
    };

    beforeAll(() => {
      wrapper = shallow(<MarketsDisplay {...props} />);
    });

    //   1. A MarketsDisplay should have an h4 element to display the 'Markets'
    //   title
    it('MarketsDisplay should have an h4 element to display the `Markets` title', () => {
      expect(wrapper.contains(<h4>Markets</h4>)).toBe(true);
    });
    //   2. A single Market is rendered for each market in the
    //   marketList prop
    it('A single Market is rendered for each market in the marketList prop', () => {
      expect(wrapper.find('div.allMarkets').children().length).toBe(props.marketList.length);
    });
    //   3. The percentage prop should be a string calculated to two decimals.
    it('The percentage prop should be a string calculated to two decimals', () => {
      const percentages = wrapper.find(Market).map(market => market.props().percentage);
      // const percent = wrapper.first('Market').percentage;
      expect(percentages.every((percent) => percent === Number(percent).toFixed(2))).toBe(true);
      // const percentStr = String(percent).split('.');
      // expect(percentStr.length).toBe(props.marketList.length);

      // Possibly use toFixed method
    });
    //   Test for zero, a whole number, and a fractional value. (Right now this
    //   is implemented incorrectly, so follow TDD here)
  });
});
