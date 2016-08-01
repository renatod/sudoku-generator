var SudokuFactory = require('./../src/factory');

var factory = new SudokuFactory();
var sudoku = factory.generate();
sudoku.print(4);
