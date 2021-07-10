namespace Car{

    //% blockId=run
    //% block="はしる %time %speed"
    export function はしる (time: number, speed: number): void
    {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
        if(input.runningTime() / 1000 == time) {
            maqueen.motorStop(maqueen.Motors.All)
       }
    }
}