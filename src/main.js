import Datebase from './database/database'
import Scene from './scene/scene'

const scene = new Datebase()

const ctx = canvas.getContext('2d')

export default class Main {
    constructor() {
        this.init()
    }
    init() {
        this.scene = new Scene(ctx)
    }
}