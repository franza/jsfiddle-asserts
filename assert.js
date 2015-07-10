(function (g) {
    function assert(bool, message) {
        assert.fails = assert.fails || [];
        assert.succeeded = assert.succeeded || 0;
        if (!bool) {
            message = message || 'Assertion error';
            assert.fails.push(Error(message));
        } else {
            assert.succeeded += 1;
        }
    }

    assert.finish = function () {
        if (!assert.fails.length) {
            console.log('All tests passed');
        } else {
            var messages = assert.fails.map(function (err) {
                return err.message;
            }).join('\n');
            console.log('%s tests succeeded, %s tests failed. Failed tests:\n%s', assert.succeeded, assert.fails.length, messages);
        }
    }

    assert.throws = function (fn) {
        try {
            fn();
        } catch (err) {
            return err;
        }
        return undefined;
    };

    g.assert = assert;
})(window);