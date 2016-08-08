var SudokuFactory = require('./../../src/factory');

var factory = new SudokuFactory();
var sudoku = factory.generate();

var make = function() {
  $table = $("table.sudoku");
  $table.empty();

  var data = sudoku.getData(4);
  for (var y = 0; y < 9; y++) {

    if (y % 3 == 0) {
      $row = $("<tr/>");
      $row.appendTo($table);
    }

    $td = $("<td/>");
    $td.appendTo($row);

    $table2 = $("<table />");
    $table2.appendTo($td);

    for (var x = 0; x < 9; x++) {
        if (x % 3 == 0) {
          $row2 = $("<tr/>");
          $row2.appendTo($table2);
        }

        $td2 = $("<td/>", { html: data[y][x]});
        $td2.appendTo($row2);
    }
  }
};

$btnNew = $("#new");
$btnNew.on("click", function() {
  make();
});

make();
