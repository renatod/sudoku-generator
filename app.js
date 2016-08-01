(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var SudokuFactory = require('./../src/factory');

var factory = new SudokuFactory();
var sudoku = factory.generate();

$table = $("#sudoku")

for (var y = 0; y < 9; y++) {
  $row = $("<tr/>");
  $row.appendTo($table);
  for (var x = 0; x < 9; x++) {
      $td = $("<td/>", { html: sudoku.getData()[y][x]});
      $td.appendTo($row);
  }
}

},{"./../src/factory":2}],2:[function(require,module,exports){
var Sudoku = require('./sudoku');
var Mixins = require('./mixins');

function SudokuFactory() {
    this.generate = function () {
        while (true) {
            var data = make();
            if (data != null)
                return new Sudoku(data);
        }
    };

    function make() {
        var line = [];
        var column = [];
        var square = [];

        for (var x = 0; x <= 8; x++) {
            line[x] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            column[x] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            square[x] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }

        var result = [];

        for (var y = 0; y <= 8; y++) {
            result[y] = [];

            for (x = 0; x <= 8; x++) {
                var value = getValue(line[x], column[y], square[Mixins.getSquare(x, y)], 0);
                if (value == null)
                    return null;

                result[y][x] = value;
            }
        }

        return result;
    }

    function getValue(line, column, square, attempts) {
        var index = Math.floor(Math.random() * line.length);
        var value = line[index];

        if (attempts > 300)
            return null;

        attempts++;

        var column_index = column.indexOf(value);
        if (column_index < 0)
            return getValue(line, column, square, attempts);

        var squareIndex = square.indexOf(value);
        if (squareIndex < 0)
            return getValue(line, column, square, attempts);

        line.splice(index, 1);
        column.splice(column_index, 1);
        square.splice(squareIndex, 1);
        return value;
    }
}

module.exports = SudokuFactory;

},{"./mixins":3,"./sudoku":4}],3:[function(require,module,exports){
function Mixins() {
  this.getSquare = function(x, y) {
      return ((Math.ceil((y + 1) / 3) * 3) + (Math.ceil((x + 1) / 3) - 3) - 1);
  }
}

module.exports = new Mixins();

},{}],4:[function(require,module,exports){
var Mixins = require('./mixins');

function Sudoku(data) {
    this.print = function (reveal) {
        var squares = [];

        for (var y = 0; y <= 8; y++) {
            var line = "";
            for (x = 0; x <= 8; x++) {
                var square = Mixins.getSquare(x, y);
                if (!squares[square])
                    squares[square] = 0;

                if (squares[square] > reveal || (Math.random() * 10) > reveal) {
                    line += "[ ]";
                    continue;
                }

                squares[square]++;
                line += "[" + data[y][x] + "]";
            }
            console.log(line);
        }
    };

    this.getData = function() {
        return data;
    }
}

module.exports = Sudoku;

},{"./mixins":3}]},{},[1,2,3,4]);
