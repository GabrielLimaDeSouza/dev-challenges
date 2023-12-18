import { useContext, useState } from 'react';
import { FilteredUnitsContext } from '../context/FilteredUnitsContext';
import { UnitsService } from '../services/UnitsService';

interface UseFilteredUnitsProps {
  hour: string;
  showClosed: boolean;
}

export const useFilteredUnits = ({ hour, showClosed }: UseFilteredUnitsProps) => {
  const { saveUnits } = useContext(FilteredUnitsContext);
  const [numberOfUnits, setNumberOfUnits] = useState(0);
  const unitsService = new UnitsService();

  const filterUnits = async () => {
    const filteredUnits = await unitsService.getUnitsByFilter(hour, showClosed);
    setNumberOfUnits(filteredUnits.locations.length);
    saveUnits(filteredUnits);
  };

  const clearUnits = async () => {
    saveUnits({});
  }

  return {
    filterUnits,
    clearUnits,
    numberOfUnits,
    setNumberOfUnits
  };
};
