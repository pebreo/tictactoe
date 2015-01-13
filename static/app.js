
var Funcs = function() {};


Funcs.prototype.foo = function() {
  return 'foo';
}

/*
Funcs.prototype.handlestr = function() {
  return {case: 'computerturn', cell: null};
}
*/

Funcs.prototype.isComputerTurn = function(tilestr) {
  
  letters = tilestr.split('');
  c = _.countBy(letters);
  if(c.X == c.O) {
    return true;
  } else if (c.O == 1) {
    return true;
  } else { return false; }
} 

Funcs.prototype.checkComputerLostHor = function(tilestr) {
  // horizontal
  //var re = /.{0,3}X{3}/g;
  /*
  var re = /(.){3}X{3}/g;
  var result = tilestr.match(re);
  if(result===null) {
    result = {};
    result.length = 0;
  }
  if(result.length==1) {
    return true;
  } else { return false; }
  */
  var splitted = tilestr.match(/.../g);
  if(splitted[0]=='XXX') { return true }
  if(splitted[1]=='XXX') { return true }
  if(splitted[2]=='XXX') { return true }
  return false;
}

Funcs.prototype.checkComputerLostHor2 = function(tilestr) {

  var splitted = tilestr.match(/.../g);
  if(splitted[0]=='XXX') { return true }
  if(splitted[1]=='XXX') { return true }
  if(splitted[2]=='XXX') { return true }
  return false;
   
} 

Funcs.prototype.checkComputerLostVert = function(tilestr) {
  // horizontal
  var re = /X../g;
  var result = tilestr.match(re);

  var re2 = /.X./g;
  var result2 = tilestr.match(re2);
  
  var re3 = /..X/g;
  var result3 = tilestr.match(re3);
  
  if(result===null) {
    result = {};
    result.length = 0;
  }
    if(result2===null) {
    result2 = {};
    result2.length = 0;
  }
    if(result3===null) {
    result3 = {};
    result3.length = 0;
  }
 
  if(result.length == 3 || result2.length == 3 || result3.length == 3) {
    return true;
  } else { return false; }
} 

Funcs.prototype.checkComputerLostDiag = function(tilestr) {
  // 
  var re = /X...X...X/g;
  var result = tilestr.match(re);
  
  var re2 = /..X.X.X../g;
  var result2 = tilestr.match(re2);
  if(result===null) {
    result = {};
    result.length = 0;
  }
    if(result2===null) {
    result2 = {};
    result2.length = 0;
  }

  if(result.length==1 || result2.length==1) {
    return true;
  } else { return false; }
} 

Funcs.prototype.checkComputerLost = function(tilestr) {
  if(this.checkComputerLostHor(tilestr) || this.checkComputerLostVert(tilestr) || this.checkComputerLostDiag(tilestr) ) {
    return true;
  } else { return false; }
} 

Comp.prototype.run_strat1 = function() {
  return 7;

}

Funcs.prototype.checkComputerWonHor = function(tilestr) {
  // horizontal
  /*
  var re = /O{3}/g;
  var result = tilestr.match(re);
  if(result===null) {
    result = {};
    result.length = 0;
  }
  if(result.length==1) {
    return true;
  } else { return false; }
  */
  var splitted = tilestr.match(/.../g);
  if(splitted[0]=='OOO') { return true }
  if(splitted[1]=='OOO') { return true }
  if(splitted[2]=='OOO') { return true }
  return false;
} 

Funcs.prototype.checkComputerWonVert = function(tilestr) {
  // horizontal
  var re = /O../g;
  var result = tilestr.match(re);

  var re2 = /.O./g;
  var result2 = tilestr.match(re2);
  
  var re3 = /..O/g;
  var result3 = tilestr.match(re3);
  
  if(result===null) {
    result = {};
    result.length = 0;
  }
    if(result2===null) {
    result2 = {};
    result2.length = 0;
  }
    if(result3===null) {
    result3 = {};
    result3.length = 0;
  }
 
  if(result.length == 3 || result2.length == 3 || result3.length == 3) {
    return true;
  } else { return false; }
} 

Funcs.prototype.checkComputerWonDiag = function(tilestr) {
  // 
  var re = /O...O...O/g;
  var result = tilestr.match(re);
  
  var re2 = /..O.O.O../g;
  var result2 = tilestr.match(re2);
  if(result===null) {
    result = {};
    result.length = 0;
  }
    if(result2===null) {
    result2 = {};
    result2.length = 0;
  }

  if(result.length==1 || result2.length==1) {
    return true;
  } else { return false; }
}

Funcs.prototype.checkComputerWon = function(tilestr) {
  if(this.checkComputerWonHor(tilestr) || this.checkComputerWonVert(tilestr) || this.checkComputerWonDiag(tilestr) ) {
    return true;
  } else { return false; }
} 

Comp.prototype.matchPattern = function(tilestr, patt) {
   // horizontal
  var result = tilestr.match(patt);
  if(result===null) {
    result = {};
    result.length = 0;
  }
  if(result.length==1) {
    return true;
  } else { return false; }
}



Funcs.prototype.makeComputerMove = function(OL_jobject, tilenum) {
   //OL_jobject = $("#selectable");
  li = OL_jobject.children();
  //console.log(li);
  $(li[tilenum]).text("O");
  return true;
}

Funcs.prototype.getTileStr = function(OL_jobject) {
  //OL_jobject = $("#selectable");
  li = OL_jobject.children();
  newstr = $.map(li, function(item,i) {
    return $(item).text() ? $(item).text(): '_';
  }).join('');
  //console.log('newstri' + newstr);
  return newstr;
}


Funcs.prototype.handlestr = function(OL_jobject, tilestr) {
   var pc = new Comp();
  //newstr = this.getTileStr(OL_jobject);
  //console.log('newstr' + newstr);
  //return {case: 'computerwon', cell: null};
  
  if(this.checkComputerLost(tilestr)) {
    return {case: 'computerlost', cell: null};
  }
  if(this.isComputerTurn(tilestr)) {
      // calculate computer move
      tilenum = pc.calcComputerMove(tilestr);
    
      // make computer move
      this.makeComputerMove(OL_jobject, tilenum);
      
      // get tilestr
      newstr = this.getTileStr(OL_jobject);
      // check if computer won
      if(this.checkComputerWon(newstr)) {
        return {case: 'computerwon', cell: null};
      }
      
      return { case:'computerturn', cell: null}
  }
  return { case:'humanturn', cell: null}
  
}

