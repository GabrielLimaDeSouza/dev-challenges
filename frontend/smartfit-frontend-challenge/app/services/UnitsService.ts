import axios from "axios";
import { UnitResponse } from "../interface/UnitResponse";

export class UnitsService {
    private apiUrl = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

    async getUnits(): Promise<UnitResponse> {
        try {
            const response = await axios.get<UnitResponse>(this.apiUrl, {
                headers: {
                    Accept: 'application/json',
                },
            });

            return response.data;
        } catch (error: any) {
            console.error('Error getting units:', error.message);
            throw error;
        }
    }
    async getUnitsByFilter(hour: string, showClosed: boolean): Promise<UnitResponse> {
        try {
            let units = await this.getUnits();
            if(hour != ""){
                const unitScheduleRequired = this.transformHour(hour);
                units.locations = units.locations.filter((unit) => {
                    if (unit.schedules && unit.schedules.length > 0) {
                        return unit.schedules.some((schedule) => {
                            const unitScheduleHour = this.transformHour(schedule.hour);
                            return unitScheduleRequired.openHourInt >= unitScheduleHour.openHourInt && unitScheduleRequired.closeHourInt <= unitScheduleHour.closeHourInt;
                        });
                    }
                });
            }
            if(!showClosed) {
                units.locations = units.locations.filter(unit => {
                    return unit.opened === true;
                })
            }

            return units;
        } catch (error: any) {
            console.error('Erro ao obter unidades:', error.message);
            throw error;
        }
    }

    transformHour = (hour: string) => {
        let [openHour, closeHour] = hour.split(' às ');
        let openHourInt = parseInt(openHour?.replace('h', ''), 10);
        let closeHourInt = parseInt(closeHour?.replace('h', ''), 10);

        let unitSchedule = {
            openHourInt,
            closeHourInt
        }

        return unitSchedule;
    }
}
