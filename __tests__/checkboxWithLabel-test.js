'use strict';

jest.dontMock('../components/checkboxWithLabel.js');

describe('checkbox with label component', function() {
	it('should change label with the value of checkbox', function() {

		var CheckboxWithLabel = require('../components/checkboxWithLabel.js'),
		    React             = require('react/addons'),
		    TestUtils         = React.addons.TestUtils,
		    checkbox,
		    label,
		    input;

		checkbox = TestUtils.renderIntoDocument(
			<CheckboxWithLabel labelOn="On" labelOff="Off"/>
		);

		label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');

		expect(label.getDOMNode().textContent).toEqual('Off');

		input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');

		TestUtils.Simulate.change(input);

		expect(label.getDOMNode().textContent).toEqual('On');

	});
});