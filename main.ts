controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myCorg.bark()
})
let myCorg: Corgio = null
myCorg = corgio.create(SpriteKind.Player)
myCorg.updateSprite()
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.maxJump = 1
