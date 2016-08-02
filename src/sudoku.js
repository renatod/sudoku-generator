var Mixins = require('./mixins');

function Sudoku(data) {
    this.getData = function(reveal) {
        var result = [];
        var squares = [];

        for (var y = 0; y <= 8; y++) {
            result[y] = [];

            for (x = 0; x <= 8; x++) {
                result[y][x] = null;

                var square = Mixins.getSquare(x, y);
                if (!squares[square])
                    squares[square] = 0;

                if (squares[square] > reveal || (Math.random() * 10) > reveal) {
                    continue;
                }

                squares[square]++;
                result[y][x] = data[y][x];
            }
        }

        return result;
    }
}

module.exports = Sudoku;
