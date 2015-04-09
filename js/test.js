var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
    
    var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);
return s;
};

console.log(udacityizer('audacity'))