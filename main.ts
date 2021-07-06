namespace Car{

    //% blockId=run
    //% block="はしる"
    export function はしる (じかん秒: number, はやさ: number) {
        if (input.runningTime() / 1000 <= じかん秒) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, はやさ)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
}
