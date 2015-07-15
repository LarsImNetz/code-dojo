line1="._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.";
line2="|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|";
line3="|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|";

textline1 = line1.split("   ");
textline2 = line2.split("   ");
textline3 = line3.split("   ");

digitLine1 = function(numberstring) {
  var num = numberstring[0];
  return textline1[num];
};

digitLine2 = function(numberstring) {
  var num = numberstring[0];
  return textline2[num];
};

digitLine3 = function(numberstring) {
  var num = numberstring[0];
  return textline3[num];
};

check = function(numberstring) {
  for (i=0;i<numberstring.length;i++) {
     var num = numberstring[i];
     if (!isNaN(num)) {
      console.log("nummer gefunden " + num);
    }  
     else {
        console.log("keine Zahl: " + num);
        throw new Error("Parsing is not possible");
     }
  }
}

digit = function(numberstring) {
  var i;
  var s="";

  for (i=0;i<numberstring.length;i++) {
    var num = numberstring[i];
    s=s+digitLine1(num)+" ";
  }

  s=s+"#";

  for (i=0;i<numberstring.length;i++) {
    var num = numberstring[i];
    s=s+digitLine2(num)+" ";
  }

  s=s+"#";

  for (i=0;i<numberstring.length;i++) {
    var num = numberstring[i];
    s=s+digitLine3(num)+" ";
  }

  return s;

};

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

digitClean = function(digits) {
  var dotReplaced = replaceAll(digit(digits), ".", " ");
  var sharpReplaced = replaceAll(dotReplaced, "#", "\n" );
  var typewriter = "" + sharpReplaced + "";
  return typewriter;
}
