var Comp = function() {};

Comp.prototype.conds1 = function(tilestr) {
  // 1
  if(this.matchPattern(tilestr, "OX_______")) {
    return 3;
  }
  if(this.matchPattern(tilestr, "OX_O__X__")) {
    return 4;
  }
  if(this.matchPattern(tilestr, "OX_OO_X_X")) {
    return 5;
  }
  
  if(this.matchPattern(tilestr, "OX_OOXX__")) {
    return 8;
  }
  //
  if(this.matchPattern(tilestr, "OX[X_]O[X_][X_]_[X_][X_]")) {
    return 6;
  }
  
  // wreckless human move 1
  //OXXOO_X__
  if(this.matchPattern(tilestr, "OXXOO_X__")) {
    return 5;
  }
  
   
  //wreckless human move 2
  //OX_OO_XX_
  if(this.matchPattern(tilestr, "OX_OO_XX_")) {
    return 5;
  }
  
   // Path B
  
  if(this.matchPattern(tilestr, "O__X_____")) {
    return 1;
  }
  
  if(this.matchPattern(tilestr, "OOXX_____")) {
    return 4;
  }
  
  if(this.matchPattern(tilestr, "OOXXO___X")) {
    return 7;
  }
  
  if(this.matchPattern(tilestr, "OOXXO__X_")) {
    return 8;
  }
  
  if(this.matchPattern(tilestr, "OO_X[X_][X_][X_][X_][X_]")) {
    return 2;
  }
  
  //wreckless human move 1
  //OOXXOX___
  if(this.matchPattern(tilestr, "OOXXOX___")) {
    return 8;
  }
  //OOXXO_X__
  if(this.matchPattern(tilestr, "OOXXO_X__")) {
    return 8;
  }
  
}

Comp.prototype.conds2 = function(tilestr) {
  // 3
 
  //O_X______ - 7 
  if(this.matchPattern(tilestr, "O_X______")) {
    return 8;
  }
  
  //wreckless
  //O_X_____O
  //
  //O[X_]X[X_]z[X_][X_][X_]O
  if(this.matchPattern(tilestr, "O[X_]X[X_]_[X_][X_][X_]O")) {
    return 4;
  }
  //O_X_X___O
  if(this.matchPattern(tilestr, "O_X_X___O")) {
    return 6;
  }
  //O_X_X_OXO
   if(this.matchPattern(tilestr, "O_X_X_OXO")) {
    return 3;
  }
  //O_XXX_O_O
     if(this.matchPattern(tilestr, "O_XXX_O_O")) {
    return 7;
  }
  
  //wreckless
  //O[X_]X_X[X_]O_O
  if(this.matchPattern(tilestr, "O[X_]X_X[X_]O_O")) {
    return 7;
  }
}

Comp.prototype.conds3 = function(tilestr) {
 // Human middle 7
  //O___X____
  if(this.matchPattern(tilestr, "O___X____")) {
    return 8;
  }
  //O___X__XO
  if(this.matchPattern(tilestr, "O___X__XO")) {
    return 1;
  }
  //OOX_X__XO
  if(this.matchPattern(tilestr, "OOX_X__XO")) {
    return 6;
  }
  //OOXXX_OXO
  if(this.matchPattern(tilestr, "OOXXX_OXO")) {
    return 5;
  }
  //OOX_XXOXO
    if(this.matchPattern(tilestr, "OOX_XXOXO")) {
    return 3;
  }
  //wreckless
  //OO_[X_]X[X_][X_]XO
  if(this.matchPattern(tilestr, "OO_[X_]X[X_][X_]XO")) {
    return 2;
  }
}

Comp.prototype.conds4 = function(tilestr) {
 // Human middle 8
  //O___XX__O
  if(this.matchPattern(tilestr, "O___XX__O")) {
    return 3;
  }
  
  //wreckless
  //O__OXX__O
  //O[X_][X_]OXX_[X_]O
  if(this.matchPattern(tilestr, "O[X_][X_]OXX_[X_]O")) {
    return 6;
  }
  
  //O_OXXX_O
  if(this.matchPattern(tilestr, "O__OXXX_O")) {
    return 2;
  }
  
  //OXOOXXX_O
  if(this.matchPattern(tilestr, "OXOOXXX_O")) {
    return 7;
  }
  
  //O_OOXXXXO
    if(this.matchPattern(tilestr, "O_OOXXXXO")) {
    return 1;
  }
}

Comp.prototype.conds5 = function(tilestr) {
 // Human middle 9
  //O__XX___O
  if(this.matchPattern(tilestr, "O__XX___O")) {
    return 5;
  }
  
  //wreckless
  //O[X_]_XXO[X_][X_]O
  if(this.matchPattern(tilestr, "O[X_]_XXO[X_][X_]O")) {
    return 2;
  }
  //O_XXXO__O
  if(this.matchPattern(tilestr, "O_XXXO__O")) {
    return 6;
  }
  
  //OXXXXOO_O
  if(this.matchPattern(tilestr, "OXXXXOO_O")) {
    return 7;
  }
  
  //O_XXXOOXO
  if(this.matchPattern(tilestr, "O_XXXOOXO")) {
    return 1;
  }
  
  //O__XXOX_O
    if(this.matchPattern(tilestr, "O__XXOX_O")) {
    return 2;
  }
  
  //OX_XXO__O
   if(this.matchPattern(tilestr, "OX_XXO__O")) {
    return 7;
  }
  
  //OX_XXOXOO
  if(this.matchPattern(tilestr, "OX_XXOXOO")) {
    return 2;
  }
  
  //O__XXO_XO
  if(this.matchPattern(tilestr, "O__XXO_XO")) {
    return 1;
  }
  //OOXXXO_XO
  if(this.matchPattern(tilestr, "OOXXXO_XO")) {
    return 6;
  }
  
}

Comp.prototype.conds6 = function(tilestr) {
  // Human middle 10
  
  //OX__X___O
  if(this.matchPattern(tilestr, "OX__X___O")) {
    return 7;
  }
  
  // wreckless
  //OX__X__OO
  //OX[X_][X_]X[X_]_OO
  if(this.matchPattern(tilestr, "OX[X_][X_]X[X_]_OO")) {
    return 6;
  }
  
  //OX__X_XOO
  if(this.matchPattern(tilestr, "OX__X_XOO")) {
    return 2;
  }
  
  //OXOXX_XOO
  if(this.matchPattern(tilestr, "OXOXX_XOO")) {
    return 5;
  }
  
  //OXO_XXXOO
  if(this.matchPattern(tilestr, "OXO_XXXOO")) {
    return 3;
  }
}

Comp.prototype.conds6 = function(tilestr) {
  // Scenario 4
  
  //O_____X__
  if(this.matchPattern(tilestr, "O_____X__")) {
    return 8;
  }
  
  //wreckless
  //O_____X_O
  //O[X_][X_][X}_[X_]X[X_]O
  if(this.matchPattern(tilestr, "O[X_][X_][X_]_[X_]X[X_]O")) {
    return 4;
  }
  
  //O___X_X_O
  if(this.matchPattern(tilestr, "O___X_X_O")) {
    return 2;
  }
  //O_O_XXX_O
  if(this.matchPattern(tilestr, "O_O_XXX_O")) {
    return 1;
  }
  //OXO_X_X_O
  if(this.matchPattern(tilestr, "O_O_XXX_O")) {
    return 5;
  }
}

Comp.prototype.conds7 = function(tilestr) {
  //Scenario 5
  
  //O______X_
  if(this.matchPattern(tilestr, "O______X_")) {
    return 2;
  }
  
  //wreckless
  //OXO_O__X_
  //OXO[X_]O[X_]_X_
  if(this.matchPattern(tilestr, "OXO[X_]O[X_]_X_")) {
    return 8;
  }
  //OXO____X_
  if(this.matchPattern(tilestr, "OXO____X_")) {
    return 4;
  }
  //OXO_O_XX_
  if(this.matchPattern(tilestr, "OXO_O_XX_")) {
    return 8;
  }
  //OXO_O__XX
  if(this.matchPattern(tilestr, "OXO_O__XX")) {
    return 6;
  }
}

Comp.prototype.conds8 = function(tilestr) {
  // Scenario 6
  //O_O_X_X_O
  //O_O[X_]X_X[X_]O
  // wreckles
  if(this.matchPattern(tilestr, "O_O[X_]X_X[X_]O")) {
    return 1;
  }
  
  //OXO_X_X_O
  if(this.matchPattern(tilestr, "OXO_X_X_O")) {
    return 5;
  }
  

}

Comp.prototype.conds9 = function(tilestr) {
  // Human Middle 10
  //OX__X___O
  if(this.matchPattern(tilestr, "OX__X___O")) {
    return 7;
  }

  //wreckless
  //OX__X__OO
  //OX[X_][X_]X[X_]_OO
  if(this.matchPattern(tilestr, "OX[X_][X_]X[X_]_OO")) {
    return 6;
  }
  //OX__X_XOO
  if(this.matchPattern(tilestr, "OX__X_XOO")) {
    return 2;
  }
  //OXOXX_XOO
  if(this.matchPattern(tilestr, "OXOXX_XOO")) {
    return 5;
  }
  //OXO_XXXOO
  if(this.matchPattern(tilestr, "OXO_XXXOO")) {
    return 3;
  }
}

//O___X_X_O
Comp.prototype.conds10 = function(tilestr) {
    //wreckless
  //O_O_X_X_O
  //O[X_]O[X_]X_X[X_]O
  if(this.matchPattern(tilestr, "O[X_]O[X_]X_X[X_]O")) {
    return 5;
  }
}

Comp.prototype.conds11 = function(tilestr) {
  //Scenario Like 7
  //O____X___
  if(this.matchPattern(tilestr, "O____X___")) {
    return 6;
  }
  //wreckless
  //O____XO__
  if(this.matchPattern(tilestr, "O[X_][X_]_[X_]XO[X_][X_]")) {
    return 3;
  }
  //O__X_XO__
  if(this.matchPattern(tilestr, "O__X_XO__")) {
    return 4;
  }
  //wreckless
  //O__XOXO__
  //O[X_][X_]XOXO[X_]_
  if(this.matchPattern(tilestr, "O[X_][X_]XOXO[X_]_")) {
    return 8;
  }
  //O__XOXO_X
  if(this.matchPattern(tilestr, "O__XOXO_X")) {
    return 2;
  }
  
}

Comp.prototype.conds12 = function(tilestr) {
  // Scenario "unknown" 8
  //O_______X
  if(this.matchPattern(tilestr, "O_______X")) {
    return 6;
  }
  //wreckless
  //O_____O_X
  //O[X_][X_]_[X_][X_]O[X_]X
  if(this.matchPattern(tilestr, "O[X_][X_]_[X_][X_]O[X_]X")) {
    return 3;
  }
  
  //O__X__O_X
  if(this.matchPattern(tilestr, "O__X__O_X")) {
    return 2;
  }
  //wreckless
  //O_OX__O_X
  //O_OX_[X_]O[X_]X
  if(this.matchPattern(tilestr, "O_OX_[X_]O[X_]X")) {
    return 1;
  }
  //O_OXX_O_X
  if(this.matchPattern(tilestr, "O_OXX_O_X")) {
    return 1;
  }
  //OXOX__O_X
  if(this.matchPattern(tilestr, "OXOX__O_X")) {
    return 4;
  }
}

Comp.prototype.calcComputerMove = function(tilestr) {
  var tile = undefined;
  tile = tile !== undefined ? tile : this.conds1(tilestr);
  tile = tile !== undefined ? tile : this.conds2(tilestr);
  tile = tile !== undefined ? tile : this.conds3(tilestr);
  tile = tile !== undefined ? tile : this.conds4(tilestr);
  tile = tile !== undefined ? tile : this.conds5(tilestr);
  tile = tile !== undefined ? tile : this.conds6(tilestr);
  tile = tile !== undefined ? tile : this.conds7(tilestr);
  tile = tile !== undefined ? tile : this.conds8(tilestr);
  tile = tile !== undefined ? tile : this.conds9(tilestr);
  tile = tile !== undefined ? tile : this.conds10(tilestr);
  tile = tile !== undefined ? tile : this.conds11(tilestr);
  tile = tile !== undefined ? tile : this.conds12(tilestr);
  return tile;
  //OO_XX_XO
}