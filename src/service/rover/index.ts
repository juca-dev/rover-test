import Size from '../size'
import Position from '../position'
import Instruction from '../instruction'
import Coordinate from '../coordinate'
import { IConstructor } from './interface'

class RoverService {
    private plateau: Size
    private position: Position

    constructor({ plateau, position }: IConstructor) {
        this.plateau = plateau
        this.position = position
    }

    private move() {
        switch (this.position.facing) {
            case Coordinate.North:
                if (this.position.y == this.plateau.height) { // ignore to keep inside limits
                    break
                }
                this.position.y += 1
                break
            case Coordinate.East:
                if (this.position.x == this.plateau.width) { // ignore to keep inside limits
                    break
                }
                this.position.x += 1
                break
            case Coordinate.South:
                if (this.position.y == 0) { // ignore to keep inside limits
                    break
                }
                this.position.y -= 1
                break
            case Coordinate.Weast:
                if (this.position.x == 0) { // ignore to keep inside limits
                    break
                }
                this.position.x -= 1
                break
            default:
                break // TODO: treat, invalid coordinate
        }
    }

    private rotate(left: boolean) {
        switch (this.position.facing) {
            case Coordinate.North:
                this.position.facing = left ? Coordinate.Weast : Coordinate.East
                break
            case Coordinate.East:
                this.position.facing = left ? Coordinate.North : Coordinate.South
                break
            case Coordinate.South:
                this.position.facing = left ? Coordinate.East : Coordinate.Weast
                break
            case Coordinate.Weast:
                this.position.facing = left ? Coordinate.South : Coordinate.North
                break
            default:
                break // TODO: treat, invalid coordinate
        }
    }

    private run(instruction: Instruction | string) {
        switch (instruction) {
            case Instruction.Left:
                this.rotate(true)
                break
            case Instruction.Right:
                this.rotate(false)
                break
            case Instruction.Move:
                this.move()
                break
            default:
                break // TODO: treat, invalid instruction
        }
    }

    process(commands: string) {
        commands
            .split('')
            .map(e => this.run(e))
    }

    log(): string {
        return `${this.position.x} ${this.position.y} ${this.position.facing}`
    }

}

export default RoverService