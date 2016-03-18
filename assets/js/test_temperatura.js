var expect = chai.expect;

describe("Medida", function() {
    
    describe("Constructor", function() {
    it("Debería tipo y valor", function() {
      var t = new Medida (5, 'M');
      expect(t.valor).to.equal(5);
      expect(t.tipo).to.equal("M");
    });
    
    it("Debería crearse con 1 parámetro", function() {
      var t = new Medida (5);
      expect(t.valor).to.equal(5);
    });
    
    it("No debería crearse sin parámetros", function() {
      expect(new Medida ()).to.equal.undefined;
    });
  });
    
});
