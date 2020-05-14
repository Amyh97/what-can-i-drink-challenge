describe("whatCanIDrink", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    describe("checksAge", function(){
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        it("should return Drink Toddy(12)", function(){
             var result = whatCanIDrink(12)
            expect(result).toBe("Drink Toddy");
        });
        it("should return Drink Coke(17)", function(){
             var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
        it("should return Drink Beer(20)", function() {
             var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });
        it("should retrun Drink Whisky(51)", function() {
             var result = whatCanIDrink(51)
            expect(result).toBe("Drink Whisky");
        });
    });
});