var expect = chai.expect;

describe('#createDeck', function() {
    it('should create a new instance of Deck', function(done) {
        let testDeck = new Deck();
        testDeck.createDeck();
        console.log("testDeck:", testDeck)
        let testDeckKeys = Object.keys(testDeck.deck).length;
        console.log("testDeck object.keys:", testDeckKeys);
        expect(testDeckKeys).to.eql(52);
        done();
    });
    
});







