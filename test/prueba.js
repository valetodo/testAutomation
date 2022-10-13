describe.skip('Connection', function () {

    beforeEach(function (done) {
        console.log("llamando desde before tag")
        done();
    });

    describe('#find()', function () {
        it('respond with matching records', function (done) {
           console.log("desde el test")
            done();
        });

        it('otro test', function (done) {
            console.log("desde el test dos")
            done();
        });

    });
});