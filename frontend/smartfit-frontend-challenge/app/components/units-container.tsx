"use client"

import UnitCard from "./unit-card"
import React, {useContext} from 'react'
import { FilteredUnitsContext } from "../context/FilteredUnitsContext"

export default function UnitContainer() {
  const { units } = useContext(FilteredUnitsContext);

  return (
    <div className="w-full flex justify-between gap-2 flex-wrap">
      {units?.locations?.map((unit: any) => {
        return <UnitCard key={unit.id} unit={unit} />;
      })}
    </div>
  )
}