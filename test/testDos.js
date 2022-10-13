describe.skip('outer', function () {
    before(function () {
        this.skip();
    });

    after(function () {
        // will be executed
    });

});

describe.skip('inner', function () {
    before(function () {
        console.log('test uno')
    });

    it('should be skipped', function () {
        console.log('test skipped')
    });

    after(function () {
        console.log('test dos')
    });
});