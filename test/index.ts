import 'mocha'
import { expect } from 'chai'
import BoardService from '../src/service/board'

describe('rover tests', () => {

    const plateau = {
        width: 5
        , height: 5
    }
    const board = new BoardService(plateau)
    console.log(board.log())

    describe('board.addRover()', () => {
        it('"1 2 N, LMLMLMLMM" - should be "1 3 N"', () => {
            const rover = board.addRover({
                x: 1
                , y: 2
                , facing: 'N'
            })
            rover.process('LMLMLMLMM')

            const result = rover.log()

            expect(result)
                .to
                .equal('1 3 N')
        })
        it('"3 3 E, MMRMMRMRRM" - should be "5 1 E"', () => {
            const rover = board.addRover({
                x: 3
                , y: 3
                , facing: 'E'
            })
            rover.process('MMRMMRMRRM')

            const result = rover.log()

            expect(result)
                .to
                .equal('5 1 E')
        })
    })
})