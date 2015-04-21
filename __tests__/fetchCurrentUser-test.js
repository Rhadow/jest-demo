jest.dontMock('../components/fetchCurrentUser.js');

describe('fetch current user', function() {

	it('calls into ajax with correct param', function() {
		var $ = require('jquery'),
		    fetchCurrentUser = require('../components/fetchCurrentUser.js');
		function dummyCallback () {};

		fetchCurrentUser(dummyCallback);

		expect($.ajax).toBeCalledWith({
			type: 'GET',
	        url: 'http://example.com/currentUser',
	        success: jasmine.any(Function)
		});
	});

	it('should call callback correctly', function(){
		var $ = require('jquery'),
		    fetchCurrentUser = require('../components/fetchCurrentUser.js');
		    callback = jest.genMockFunction();

		fetchCurrentUser(callback);

		$.ajax.mock.calls[0][0].success({
			lastName: 'Chang',
			firstName: 'Howard'
		});

		expect(callback.mock.calls[0][0]).toBeEqual({
			loggedIn: true,
			fullName: 'Howard Chang'
		});
	});

});