var SudokuFactory = require('./../../src/factory');

var factory = new SudokuFactory();
var sudoku = factory.generate();

$table = $("table.sudoku");

var data = sudoku.getData(4);

for (var y = 0; y < 9; y++) {
  $row = $("<tr/>");
  $row.appendTo($table);
  for (var x = 0; x < 9; x++) {
      $td = $("<td/>", { html: data[y][x]});
      $td.appendTo($row);
  }
}
