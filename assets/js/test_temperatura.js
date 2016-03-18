var expect = chai.expect;

describe("Medida", function() {
    
    describe("Constructor", function() {
    it("Debería tipo y valor", function() {
      var t = new Medida (5, 'c');
      expect(t.valor).to.equal(5);
      expect(t.tipo).to.equal("c");
    });
    
    it("Debería crearse con 1 parámetro", function() {
      var t = new Medida (5);
      expect(t.valor).to.equal(5);
      expect(t.tipo).to.equal(undefined);
    });
    
    it("No debería crearse sin parámetros", function() {
      expect(new Medida ()).to.equal.undefined;
    });
  });
  
  describe("Convertir", function() {
    it("Debería devolver un 'Error...' expresión no válida", function() {
        expect(Medida.convertir (null)).to.equal("Introduzca una temperatura valida: 330e-1 F to C");
    });
    
    it("Debería devolver un 'Error...' no se encuentra destino", function() {
        expect(Medida.convertir ("100 C to jjj")).to.equal('Desconozco como convertir desde "c" hasta "jjj"');
    });
    
   it("Debería devolver un objeto Medida con el valor de cambio", function() {
        expect(Medida.convertir ("100 F K")).to.equal("310.93 Kelvin");
    });
  });
    
});

describe("Temperatura", function() {
    
    describe("Constructor", function() {
    it("Debería tipo y valor", function() {
      var t = new Temperatura (5,'k');
      expect(t.valor).to.equal(5);
      expect(t.tipo).to.equal("k");
    });
    
    it("Debería crearse con 1 parámetro", function() {
      var t = new Temperatura(5);
      expect(t.valor).to.equal(5);
    });
    
    it("No debería crearse sin parámetros", function() {
      expect(new Temperatura()).to.equal.undefined;
    });
  });
    
    describe("Celsius", function() {
    describe("Clase Celsius", function() {
      it("Debería tener un valor", function() {
        var c = new Celsius(5);
        expect(c.valor).to.equal(5);
      });
      
       it("Debería de converir de Celsius a Fahrenheit", function() {
        var c = (new Celsius(5)).toFahrenheit();
        expect(Math.round(c)).to.equal(41.00);
      });
      
         it("Debería de converir de Celsius a Kelvin", function() {
        var c = (new Celsius(0)).toKelvin();
        expect(Math.round(c)).to.equal(273);
      });
      
      
    });
    });
    describe("Farenheit", function() {
    describe("Clase Farenheit", function() {
      it("Debería tener un valor", function() {
        var f = new Fahrenheit(5);
        expect(f.valor).to.equal(5);
      });
    
    
    it("Debería de converir de Fahrenheit a Celsius", function() {
        var f = (new Fahrenheit(41)).toCelsius();
        expect(Math.round(f)).to.equal(5);
      });
      
         it("Debería de converir de Celsius a Kelvin", function() {
        var f = (new Fahrenheit(10)).toKelvin();
        expect(Math.round(f)).to.equal(261);
      });
      
    });
    });
    describe("Kelvin", function() {
    describe("Clase Kelvin", function() {
      it("Debería tener un valor", function() {
        var k = new Kelvin(5);
        expect(k.valor).to.equal(5);
      });
      
      it("Debería de converir de Kelvin a Fahrenheit", function() {
        var c = (new Kelvin(261)).toFahrenheit();
        expect(Math.round(c)).to.equal(10);
      });
      
         it("Debería de converir de Kelvin a Celsius", function() {
        var c = (new Kelvin(0)).toCelsius();
        expect(Math.round(c)).to.equal(-273);
      });
      
    });
    });
});
