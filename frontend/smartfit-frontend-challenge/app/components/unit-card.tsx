import Image from "next/image"
import { UnitData } from "../interface/UnitData"

interface UnitCardProps {
    unit: UnitData,
}

export default function UnitCard({unit} : UnitCardProps) { 
    var scheduleUniqueKey = 0;

    return (
      <div className='w-[calc(33%-74px)] bg-background-gray px-4 py-2 rounded-md border-2 border-gray mb-12'>
        <div className="description flex flex-col gap-2">
            <span className="font-bold text-sm">{unit.opened ? <span className="text-yellow">Aberto</span> : <span className="text-red">Fechado</span>}</span>
            <h1 className="text-text-gray font-black text-xl">{unit.title}</h1>
            <div className="address flex flex-col text-sm font-light mb-4">
                <p dangerouslySetInnerHTML={{__html: unit.content}}></p>
            </div>
        </div>
        <div className="border w-full px-4 border-1 border-gray mb-4"></div>
        <div className="information-cards flex flex-wrap justify-between gap-2 mb-4">
            <Image src={`/img/information-card/${unit.mask}-mask.png`} height="58" width="58" alt="" />
            <Image src={`/img/information-card/${unit.towel}-towel.png`} height="58" width="58" alt="" />
            <Image src={`/img/information-card/${unit.fountain}-fountain.png`} height="58" width="58" alt="" />
            <Image src={`/img/information-card/${unit.locker_room}-lockerroom.png`} height="58" width="58" alt="" />
        </div>
        <div className="schedules flex gap-4 justify-between flex-wrap">
            {
                unit.schedules?.map((schedule) => {
                    return (
                        <div className="day" key={scheduleUniqueKey++}>
                            <h3 className="text-text-gray font-black">{schedule.weekdays}</h3>
                            <p>{schedule.hour}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
}
  