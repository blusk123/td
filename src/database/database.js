export default class Database {
    constructor() {
        this.replay()
    }
    replay() {
        this.over = false
        this.monsterLevel = 1
        this.scene = []
    }
}