
Game = function() {
  this.spielstand = {Becker:0,
                    Agassi:0};

  this.point = function(name) {
    this.spielstand[name] += 1;
  }

  this.getSpielstand = function(){
   return this.spielstand;
  };

  this.isClosed = function(){
    if (this.hasMaximumScore() && this.getPointGap() >= 2) {
      return true;
    }
    return false;
  }

  this.hasMaximumScore = function(){
    return this.spielstand.Becker >= 4 || this.spielstand.Agassi >= 4;
  }

  this.getPointGap = function(){
    return Math.abs(this.spielstand.Becker - this.spielstand.Agassi);
  }

  this.getDescription = function() {
  
  if(this.getPointGap() == 0){
    if (this.spielstand.Becker >= 3) {
      return "deuce";
    }
    else {
      return this.getSingleDescription(this.spielstand.Becker )+" all";
    }
  }
  // nicht gleiches Ergebnis
   return this.getSingleDescription(this.spielstand.Becker ) + " " + this.getSingleDescription(this.spielstand.Agassi);
  }

  this.getSingleDescription = function(spielstand) {
    switch(spielstand) {
      case 0:
        return "love";
      case 1:
        return "fifteen";
      case 2:
        return "thirty";
      case 3:
        return "fourty";
    }
    return "advantage";
  }
  
};