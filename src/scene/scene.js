const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

export default class Scene {
    constructor(ctx) {
        this.height = screenHeight
        this.width = screenHeight * 1.5
        this.x = (screenWidth - this.width) / 2 | 0
        this.y = 0
        this.render(ctx)
    }
    render(ctx) {
        ctx.fillStyle = '#fff' // 定义场景颜色
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}