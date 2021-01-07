import BoardService from '../board'

class ConsoleService {
    constructor() {
        const plateau = {
            width: 5
            , height: 5
        }
        const board = new BoardService(plateau)

        const rover1 = board.addRover({
            x: 1
            , y: 2
            , facing: 'N'
        })
        rover1.process('LMLMLMLMM')

        const rover2 = board.addRover({
            x: 3
            , y: 3
            , facing: 'E'
        })
        rover2.process('MMRMMRMRRM')

        console.log(board.log())
    }
}

export default new ConsoleService()