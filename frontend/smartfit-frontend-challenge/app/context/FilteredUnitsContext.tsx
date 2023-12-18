"use client"

import React, { createContext, useState } from 'react';

interface FilteredUnitsContextProps {
  units: any;
  saveUnits: (units: any) => void; 
}

export const FilteredUnitsContext = createContext<FilteredUnitsContextProps>({
  units: {},
  saveUnits: () => {},
});

export const FilteredUnitsProvider = ({children} : {children : React.ReactNode}) => {
  const [filteredUnits, setFilteredUnits] = useState({});

  const saveUnits = (units: any) => {
    setFilteredUnits(units);
  };

  return (
    <FilteredUnitsContext.Provider value={{ units: filteredUnits, saveUnits }}>
      {children}
    </FilteredUnitsContext.Provider>
  );
};
