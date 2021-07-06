namespace Car{

    //% blockId=run
    //% block="はしる %time %speed"
    export function はしる (time: number, speed: number): void
    {
        if (input.runningTime() / 1000 <= time) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
}