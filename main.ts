namespace Car{

    //% blockId=run
    //% block="はしる %じかん %はやさ"
    export function はしる (じかん: number, はやさ: number): void
    {
        if (input.runningTime() / 1000 <= じかん) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, はやさ)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
}