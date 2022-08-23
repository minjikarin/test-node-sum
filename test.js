require('./tools.js')();

const a = 1;
const b = 2;


describe("Test", function(){
    it("Adds 2 numbers", function(done){
        expect(sum(a,b)).toEqual(a+b);
        done();
    });
});



console.log(sum(a,b))