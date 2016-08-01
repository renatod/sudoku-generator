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
}

module.exports = Sudoku;
