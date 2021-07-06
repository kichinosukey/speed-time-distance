function はしる (じかん秒: number, はやさ: number) {
    if (input.runningTime() / 1000 <= じかん秒) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255 / 100 * はやさ)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
}
basic.forever(function () {
    はしる(3, 10)
})
