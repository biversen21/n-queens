
/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined;

  if (n === 1) {
    solution = new Board([1]);
  }
  var boards = [];
  var board = [];

  var generatePossRows = function() {
    var containerArr = [];
    var innerArr = [];
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (i === j) {
          innerArr.push(1);
        } else {
          innerArr.push(0);
        }
      }
      containerArr.push(innerArr);
      innerArr = [];
    }
    return containerArr;
  };

  var generateBoard = function() {
    for(var i = 0; i < n; i++) {
      board.push(possRows[i]);
      if (board.length < n) {
        generateBoard();
      }
      if (board.length === n) {
        boards.push(board);
        board = board.slice(0 ,n-1);
      }
    }
    board.pop();
    return boards;
  };

  var possRows = generatePossRows();
  var possBoards = generateBoard();

  var currentBoard;
  for(var i = 0; i < possBoards.length; i++) {
    currentBoard = new Board (possBoards[i]);
    if (!currentBoard.hasAnyRooksConflicts()){
      solution = possBoards[i];
      break;
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var boards = [];
  var board = [];

  var generatePossRows = function() {
    var containerArr = [];
    var innerArr = [];
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (i === j) {
          innerArr.push(1);
        } else {
          innerArr.push(0);
        }
      }
      containerArr.push(innerArr);
      innerArr = [];
    }
    return containerArr;
  };

  var generateBoard = function() {
    for(var i = 0; i < n; i++) {
      board.push(possRows[i]);
      if (board.length < n) {
        generateBoard();
      }
      if (board.length === n) {
        boards.push(board);
        board = board.slice(0 ,n-1);
      }
    }
    board.pop();
    return boards;
  };

  var possRows = generatePossRows();
  var possBoards = generateBoard();

  var currentBoard;
  for(var i = 0; i < possBoards.length; i++) {
    currentBoard = new Board (possBoards[i]);
    if (!currentBoard.hasAnyRooksConflicts()){
      solutionCount++;
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  if (n === 1) {
    solution = new Board([1]);
  }
  var boards = [];
  var board = [];

  var generatePossRows = function() {
    var containerArr = [];
    var innerArr = [];
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (i === j) {
          innerArr.push(1);
        } else {
          innerArr.push(0);
        }
      }
      containerArr.push(innerArr);
      innerArr = [];
    }
    return containerArr;
  };

  var generateBoard = function() {
    for(var i = 0; i < n; i++) {
      board.push(possRows[i]);
      if (board.length < n) {
        generateBoard();
      }
      if (board.length === n) {
        boards.push(board);
        board = board.slice(0 ,n-1);
      }
    }
    board.pop();
    return boards;
  };

  var possRows = generatePossRows();
  var possBoards = generateBoard();

  var currentBoard;
  for(var i = 0; i < possBoards.length; i++) {
    currentBoard = new Board (possBoards[i]);
    if (!currentBoard.hasAnyQueensConflicts()){
      solution = possBoards[i];
      break;
    }
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  if (n === 0) {
    solutionCount++;
  }
  var boards = [];
  var board = [];

  var generatePossRows = function() {
    var containerArr = [];
    var innerArr = [];
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (i === j) {
          innerArr.push(1);
        } else {
          innerArr.push(0);
        }
      }
      containerArr.push(innerArr);
      innerArr = [];
    }
    return containerArr;
  };

  var generateBoard = function() {
    for(var i = 0; i < n; i++) {
      if (board.indexOf(possRows[i]) === -1){
        board.push(possRows[i]);
        if (board.length < n) {
          generateBoard();
        }
      }
      if (board.length === n) {
        boards.push(board);
        board = board.slice(0 ,n-1);
      }
    }
    board.pop();
    return boards;
  };

  var possRows = generatePossRows();
  var possBoards = generateBoard();

  var currentBoard;
  for(var i = 0; i < possBoards.length; i++) {
    currentBoard = new Board (possBoards[i]);
    if (!currentBoard.hasAnyColConflicts()) {
      if (!currentBoard.hasAnyMajorDiagonalConflicts()) {
        if(!currentBoard.hasAnyMinorDiagonalConflicts()) {
          solutionCount++;
        }
      }
    }
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
