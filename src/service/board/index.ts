import Size from '../size'
import Position from '../position'
import RoverService from '../rover'

class BoardService {
    private plateau: Size
    private rovers: RoverService[]

    constructor(plateau: Size) {
        this.plateau = plateau
        this.rovers = []
    }

    addRover(position: Position): RoverService {
        const rover = new RoverService({
            plateau: this.plateau
            , position
        })

        this.rovers.push(rover)
        return rover
    }

    log(): string[] {
        return this.rovers.map(e => e.log())
    }
}

export default BoardService