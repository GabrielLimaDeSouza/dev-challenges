import { UnitData } from "./UnitData"

export interface UnitResponse {
    current_country_id: number, 
    locations: UnitData[]
}