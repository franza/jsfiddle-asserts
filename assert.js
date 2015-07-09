function assert(bool, message) {
    assert.fails = assert.fails || [];
    if (!bool) {
        message = message || 'Assertion error';
        assert.fails.push(Error(message));
    }
}

assert.finish = function () {
    if (!assert.fails.length) {
        console.log('All tests passed');
    } else {
        var messages = assert.fails.map(function (err) {
            return err.message;
        }).join('\n');
        console.log('%s tests failed: %s', assert.fails.length, messages);
    }
}