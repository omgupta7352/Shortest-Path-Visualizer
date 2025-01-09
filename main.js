// Creating the table
var x = document.createElement("TABLE");
x.setAttribute("id", "myTable");
document.body.appendChild(x);
var y = document.createElement("TBODY");
y.setAttribute("id", "mybody");
document.getElementById("myTable").appendChild(y);
for (var i = 0; i < 25; i++) {
    var z = document.createElement("TR");
    document.getElementById("mybody").appendChild(z);
    for (var j = 0; j < 50; j++) {
        var w = document.createElement("TD");
        z.appendChild(w);
    }
}


// All Variables

var check = 0;
var check1 = 0;
var bl = [];
var s = [1, 1];
var en = [4, 5];
var dia = 0;
var objarr = [];
var mainarr = [];
var path_algos = 0;
// Sttart Point

function start() {
  check = 1;
}

//End Point

function stop() {
  check = 2;
}

//Reset Block

function reset() {
  dia = 0;
  check = 0;
  check1 = 0;
  bl = [];
  s = [10, 10];
  en = [10, 22];
  visited = [s];
  objarr = [];
  mainarr = [];
  for (var c = 0; c < 25; c++) {
    for (var d = 0; d < 50; d++) {
      var x = document.getElementById("myTable").rows[c].cells;
      x[d].style.backgroundColor = "#eedddd";
    }
  }
}

//Remove Block

function remove() {
  check = 4;
}

//Select Block

function block() {
  check = 3;
}

//Generate Random Block

function ranblock() {
  for (var c = 0; c < 25; c++) {
    for (var d = 0; d < 50; d++) {
      if (Math.random() > 0.6) {
        var x = document.getElementById("myTable").rows[c].cells;
        x[d].style.backgroundColor = "#333333";
        bl.push([c, d]);
      }
    }
  }
}

//to handle all blocks accoringly

var table = document.getElementById("myTable");
var getTBody = table.getElementsByTagName("tbody")[0];
getTBody.onclick = function (e) {
  var a = e.target.parentNode.rowIndex;
  var b = e.target.cellIndex;
  if (check == 1) {
    var x = document.getElementById("myTable").rows[a].cells;
    x[b].style.backgroundColor = "MediumSeaGreen";
    var x = document.getElementById("myTable").rows[s[0]].cells;
    x[s[1]].style.backgroundColor = "#eedddd";
    s.push(a, b);
    s.shift();
    s.shift();
  } else if (check == 2) {
    var x = document.getElementById("myTable").rows[a].cells;
    x[b].style.backgroundColor = "#ff3399";
    var x = document.getElementById("myTable").rows[en[0]].cells;
    x[en[1]].style.backgroundColor = "#eedddd";
    en.push(a, b);
    en.shift();
    en.shift();
  } else if (check == 3) {
    var x = document.getElementById("myTable").rows[a].cells;
    x[b].style.backgroundColor = "#333333";
    bl.push([a, b]);
  } else if (check == 4) {
    var x = document.getElementById("myTable").rows[a].cells;
    x[b].style.backgroundColor = "#eedddd";
    var index = -1;
    //var index = bl.indexOf([a, b]);
    for (var i = 0; i < bl.length; i++) {
      if (bl[i][0] == a && bl[i][1] == b) {
        index = i;
        break;
      } else {
        index = -1;
      }
    }
    console.log(index);
    if (index > -1) {
      bl.splice(index, 1);
    }
    console.log(bl);
  } else {
  }
};
getTBody.onmousedown = function (e) {
  if (check == 3) {
    check1 = 1;
  }
};
getTBody.onmouseup = function (e) {
  if (check == 3) {
    check1 = 0;
  }
};
getTBody.onmouseover = function (e) {
  var a = e.target.parentNode.rowIndex;
  var b = e.target.cellIndex;
  if (check == 3 && check1 == 1) {
    var x = document.getElementById("myTable").rows[a].cells;
    x[b].style.backgroundColor = "#333333";
    bl.push([a, b]);
  }
};

//Handling Path Algorithm

//astar_algo

function astar_algo() {
  path_algos = 1;
  main(path_algos);
}

//bfs_algo

function bfs_algo() {
  path_algos = 2;
  main(path_algos);
}

//dfs_algo

function dfs_algo() {
  path_algos = 3;
  main(path_algos);
}

//dijkstra_algo

function dijkstra_algo() {
  path_algos = 4;
  main(path_algos);
}

//condition to check algorithm

async function main(path_algos) {
  if (path_algos == 1) {
    aStar();
  } 
  else if (path_algos == 2) {
    bfs();
  } 
  else if (path_algos == 3) {
    dfs();
  } 
  else if (path_algos == 4) {
    dijkstra();
  }
}
