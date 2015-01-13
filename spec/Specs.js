

describe("Basic", function() {
    var logic;
    beforeEach(function() {
        logic = new Funcs();
        
    }); 
  
    it("returns foo", function() {
        //calc.add(1,2);
        expect(logic.foo()).toBe('foo');
    });
    
    it("should know its turn", function() {
        // when # Xs == # Os
        // toBe() is is for 
        expect(logic.isComputerTurn('OX')).toBe(true);
        expect(logic.isComputerTurn('O_______X')).toBe(true);
        expect(logic.isComputerTurn('OX')).toBe(true);
        expect(logic.isComputerTurn('OXO')).toBe(false);
        expect(logic.isComputerTurn('OXOX')).toBe(true);
      
    });
    
    xit("should know a draw", function() {
        // when # Xs == # Os
        // toBe() is is for 
        expect(logic.checkDraw('OXXXOOOOX')).toBe(true);

    });
    
    it("should know that computer lost - horizontal", function() {
        // when # Xs == # Os
        // toBe() is is for 
        expect(logic.checkComputerLostHor('O___X____')).toBe(false);
        expect(logic.checkComputerLostHor('XXXO_OO_O')).toBe(true);
        expect(logic.checkComputerLostHor('O_OXXXOOO')).toBe(true);
        expect(logic.checkComputerLostHor('__OO_OXXX')).toBe(true);
        expect(logic.checkComputerLostHor('OOOX_XO_O')).toBe(false);
    });
    
    it("should know that computer lost - vertical", function() {
        expect(logic.checkComputerLostVert('O___X____')).toBe(false);
        expect(logic.checkComputerLostVert('XOOXOOXOO')).toBe(true);
        expect(logic.checkComputerLostVert('OOXOOXOOX')).toBe(true);
        expect(logic.checkComputerLostVert('OXOOXOOXO')).toBe(true);
    });
    
    it("should know that computer lost  - diagnol", function() {
        expect(logic.checkComputerLostDiag('O___X____')).toBe(false);
        expect(logic.checkComputerLostDiag('XOOOXOOOX')).toBe(true);
        expect(logic.checkComputerLostDiag('OOXOXOXOO')).toBe(true);
      //  expect(logic.checkComputerLostDiag('OXOOXOOXO')).toBe(true);
        
    });
    
    it("should know that computer lost  - all", function() {
        expect(logic.checkComputerLost('XO_OXOOOX')).toBe(true);
        expect(logic.checkComputerLost('OOXOXOXOO')).toBe(true);
        expect(logic.checkComputerLost('___XXXO_O')).toBe(true);
        //expect(logic.checkComputerLost('OOOX_XO_O')).toBe(false);
      //  expect(logic.checkComputerLostDiag('OXOOXOOXO')).toBe(true);
        
    });
  
    
    it("should know that computer won - horizontal", function() {
        // when # Xs == # Os
        // toBe() is is for 
        expect(logic.checkComputerWonHor('O___X____')).toBe(false);
        expect(logic.checkComputerWonHor('OOOX_XX_X')).toBe(true);
        expect(logic.checkComputerWonHor('X_XOOOXXX')).toBe(true);
        expect(logic.checkComputerWonHor('OOOX_XO_O')).toBe(true);
        expect(logic.checkComputerWonHor('XXXO_OX_X')).toBe(false);
    });
    
    
    it("should know that computer won - vertical", function() {
        expect(logic.checkComputerWonVert('O___X____')).toBe(false);
        expect(logic.checkComputerWonVert('OXXOXXOXX')).toBe(true);
        expect(logic.checkComputerWonVert('XXOXXOXXO')).toBe(true);
        expect(logic.checkComputerWonVert('OXOOXOOXO')).toBe(true);
        expect(logic.checkComputerWonVert('XO__OX_OX')).toBe(true);
    });
    
    it("should know that computer won  - diagnol", function() {
        expect(logic.checkComputerWonDiag('O___X____')).toBe(false);
        expect(logic.checkComputerWonDiag('OXXXOXXXO')).toBe(true);
        expect(logic.checkComputerWonDiag('XXOXOXOXO')).toBe(true);
      //  expect(logic.checkComputerLostDiag('OXOOXOOXO')).toBe(true);
        
    });
    
    it("should know that computer won  - all", function() {
       
        expect(logic.checkComputerWon('OX_XOXXXO')).toBe(true);
        expect(logic.checkComputerWon('XXOXOXOXX')).toBe(true);
        expect(logic.checkComputerWon('___OOOX_X')).toBe(true);
        //expect(logic.checkComputerLost('OOOX_XO_O')).toBe(false);
      //  expect(logic.checkComputerLostDiag('OXOOXOOXO')).toBe(true);
        
    });
    
    xit("should know that it drew", function() {
        // when # Xs == # Os
        // toBe() is is for 
        expect(logic.handlestr()).toEqual({case: 'computerturn', cell: null});
    });
    

});


describe("Handlestr", function() {
    var logic;
    beforeEach(function() {
        logic = new Funcs();
        pc = new Comp();
        
        OL_jobject = $('#selectable');
    }); 
  
    it("should handle computerlost", function() {
        expect(logic.handlestr(OL_jobject,'O__XXXO_O')).toEqual({case: 'computerlost', cell: null});
    }); 
    
    xit("should handle computerwon", function() {
        expect(logic.handlestr(OL_jobject,'X__OOOX_X')).toEqual({case: 'computerwon', cell: null});
        //expect(logic.handlestr([],'OX_XOXXXO')).toEqual({case: 'computerwon', cell: null});
        //expect(logic.handlestr([],'__OXOXO_X')).toEqual({case: 'computerwon', cell: null});
        //expect(logic.handlestr([],'___OOOX_X')).toEqual({case: 'computerwon', cell: null});
      
    }); 

    xit("should handle computerturn", function() {
        expect(logic.handlestr(OL_jobject,'O________')).toEqual({case: 'computerturn', cell: null});
    });
    
    it("should handle humanturn", function() {
        expect(logic.handlestr([],'OXO')).toEqual({case: 'humanturn', cell: null});
    });
    
});

describe("Calccomputermove - corner start", function() {
    var logic;
    beforeEach(function() {
        logic = new Funcs();
        pc = new Comp();
    }); 
    it("should handle match pattern",function() {
        expect(pc.matchPattern("OX________", "OX_______")).toBe(true);
         expect(pc.matchPattern("OX__", "OX_______")).toBe(false);
        expect(pc.matchPattern("OX____O___", "OX_______")).toBe(false);
    });
    
    it("should have first move", function() {
        expect(pc.calcComputerMove("OX________")).toBe(3);
    });
    
    it("should branch A",function() {
      expect(pc.calcComputerMove("OX________")).toBe(3);
    });
    
    xit("should branch A2",function() {
      expect(pc.calcComputerMove("OX_O___X__")).toBe(4);
    });
    

});

