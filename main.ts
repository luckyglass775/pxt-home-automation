basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
        pins.digitalWritePin(DigitalPin.P13, 1)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Welcome!", 0, 0)
        basic.pause(2000)
        I2C_LCD1602.clear()
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_1)) {
        pins.servoWritePin(AnalogPin.P3, 150)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P3, 0)
        basic.pause(2000)
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_2)) {
        pins.servoWritePin(AnalogPin.P4, 155)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P4, 5)
        basic.pause(2000)
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_3)) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("T=", 0, 0)
        I2C_LCD1602.ShowNumber(input.temperature(), 2, 0)
        I2C_LCD1602.ShowString("°C", 4, 0)
        basic.pause(2000)
        I2C_LCD1602.clear()
    } else if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_4)) {
    	
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) > 800) {
    	
    } else {
    	
    }
})
