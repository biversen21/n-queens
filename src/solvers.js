
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
  var solution = undefined; //fixme
  // Start decision tree
  var currentRow = [];
  var idx = 0;
  var board = [];
  var buildLevel = function(){
    idx = 0;
    currentRow = [];
    n = 3;
    for (var i=0; i<n; i++){
      if (i === idx){
        currentRow.push(1);
      } else {
        currentRow.push(0);
      }
    }
    board.push(currentRow);

    console.log(board);
  };
  //   First level  = Generate n starting boards in array with seq. placement of rook
  //   Iterate over array of first level boards
  //     Generate second level of n boards for each first level board
  //     Repeat iteration of second level... --> n
  //   When n = this.rows.length traverse each n-level (completed) board
  //     Run col and row check for each board
  //     Return first board to pass checks
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  buildLevel();
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
