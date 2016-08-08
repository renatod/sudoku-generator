var Mixins = require('./mixins');

function Sudoku(data) {
    this.getData = function(reveal) {
        var result = [];
        var squares = [];

        for (var y = 0; y <= 8; y++) {
            for (x = 0; x <= 8; x++) {
                var square = Mixins.getSquare(x, y);
                if (!squares[square])
                    squares[square] = 0;

                var value = null;
                if (squares[square] < reveal && (Math.random() * 10) <= reveal) {
                  value = data[y][x];
                  squares[square]++;
                }

                if (!result[square])
                  result[square] = [];

                result[square].push(value);
            }
        }

        return result;
    }
}

module.exports = Sudoku;
