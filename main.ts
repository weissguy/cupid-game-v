controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`myImage0`, mySprite, 0, -140)
    projectile.startEffect(effects.coolRadial, 100)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`starryclouds`)
info.setLife(9)
let hearts = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 . . . . 3 3 . . . . 
    . . . 3 3 3 3 . . 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
mySprite.setPosition(73, 92)
game.onUpdateInterval(500, function () {
    hearts.setKind(SpriteKind.Enemy)
    hearts.x = randint(10, 150)
})
