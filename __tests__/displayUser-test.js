'use strict';

jest.dontMock('../components/displayUser.js')
    .dontMock('jquery');

describe('displayUser', function() {
    it('should display correct user name', function() {

        document.body.innerHTML =
            '<div>' +
            '  <span id="username" />' +
            '  <button id="button" />' +
            '</div>';

        var displayUser      = require('../components/displayUser.js'),
            $                = require('jquery'),
            fetchCurrentUser = require('../components/fetchCurrentUser.js');

        fetchCurrentUser.mockImplementation(function(cb) {
            cb({
                loggedIn: true,
                fullName: 'Howard Chang'
            });
        });

        $('#button').click();

        expect(fetchCurrentUser).toBeCalled();
        expect($('#username').text()).toEqual('Howard Chang - Logged In');

    });
});
