

lines = function(input) {
  var lines = input.split("\n");
  return lines;
};

dimension = function(line) {
  dim = line.split(" ");
  return {y: parseInt(dim[0]), x: parseInt(dim[1])};
}


mine = function(character) {
  return character == '*' ? 1 : 0;
}

xline = function(line) {
  var length = line.length;
  var array = new Array();
  array[0] = 0;
  for(var i = 0; i<length; i++) {
    array[i+1] = mine(line.charAt(i));
  }
  array[length+1] = 0;
  return array;
}

emptyArray = function(length) {
  var line = "";
  for (var i=0;i<length;i++) {
    line += ".";
  }
  return xline(line);
}

minefield = function(field) {
  var fieldlines = lines(field);
  var height = fieldlines.length;
  var minefield = new Array();
  minefield[0] = emptyArray(fieldlines[0].length);
  for (var y = 0; y < height; y++) {
    minefield[y + 1] = xline(fieldlines[y]);
  }
  minefield[height+1] = minefield[0];
  return minefield;
}

mineadder = function(rawInput, xpos, ypos) {
  var field = minefield(rawInput);
  var x = xpos+1;
  var y = ypos+1;
  if(field[x][y] == 1) {
    return null;
  }
  return field[x-1][y-1]
  + field[x-1][y]
  + field[x-1][y+1]
  + field[x][y-1]
  + field[x][y+1]
  + field[x+1][y-1]
  + field[x+1][y]
  + field[x+1][y+1];
}

resultmap = function(rawInput) {
  var line = lines(rawInput);
  var resultmap = '';
  for (x = 0; x < line.length; x++) {
    for (y = 0; y < line[0].length; y++) {
      var character = '';
      value = mineadder(rawInput, x, y);
      if (value == null) {
        character = '*';
      }
      else {
        character = value;
      }
      resultmap += character;
    }
    resultmap += '\n';
  }
  return resultmap;
}

function createminefield(rawInput) {
  return resultmap(rawInput.substring(rawInput.indexOf("\n")+1));
}

main = function() {
  array = "3 4\n*...\n..*.\n....";
  console.log(array);
  console.log("wird zu");
  console.log(createminefield(array));
}