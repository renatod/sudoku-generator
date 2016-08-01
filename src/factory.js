var Sudoku = require('./sudoku');

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
                var value = getValue(line[x], column[y], square[getSquare(x, y)], 0);
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

    function getSquare(x, y) {
        return ((Math.ceil((y + 1) / 3) * 3) + (Math.ceil((x + 1) / 3) - 3) - 1);
    }
}


module.exports = SudokuFactory;
