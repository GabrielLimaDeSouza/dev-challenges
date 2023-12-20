import Image from "next/image";
import { useState } from "react";

import { useFilteredUnits } from "../hooks/useFilteredUnits";

export default function Scheduler() {
  const [hour, setHour] = useState("");
  const [showClosed, setShowClosed] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");

  const { filterUnits, clearUnits, numberOfUnits, setNumberOfUnits } =
    useFilteredUnits({ hour, showClosed });

  const OpeningHours = {
    MORNING: "06:00h às 12:00h",
    AFTERNOON: "12:01h às 18:00h",
    NIGHT: "18:01h às 23:00h",
  };

  const handleInputHour = (period: string) => {
    setHour(period);
    setSelectedRadio(period);
    clearUnits();
  };

  const handleInputClosedCheck = (checked: boolean) => {
    setShowClosed(checked);
  };

  const handleClearRadio = () => {
    setHour("");
    setSelectedRadio("");
    setShowClosed(false);
    setNumberOfUnits(0);
    clearUnits();
  };

  return (
    <div className="w-full h-128 border-4 border-border-gray rounded-md p-4 flex flex-col gap-6 mb-12">
      <div className="title flex items-center gap-2">
        <Image src="/img/icon-hour.png" width="24" height="24" alt="Relógio" />
        <p className="text-sm font-light">Horário</p>
      </div>
      <div className="input-container">
        <h2 className="font-light text-lg border-b-2 pb-2">
          Qual período quer treinar?
        </h2>
        <div className="input-wrapper flex gap-2 py-4 relative border-b-2 rounded-md">
          <input
            type="radio"
            name="hourInput"
            checked={selectedRadio === OpeningHours.MORNING}
            onChange={() => handleInputHour(OpeningHours.MORNING)}
          />
          <label htmlFor="hourInput" className="text-sm">
            Manhã
          </label>
          <p className="absolute right-0 font-light text-sm">
            06:00h às 12:00h
          </p>
        </div>
        <div className="input-wrapper flex gap-2 py-4 relative border-b-2 rounded-md">
          <input
            type="radio"
            name="hourInput"
            checked={selectedRadio === OpeningHours.AFTERNOON}
            onChange={() => handleInputHour(OpeningHours.AFTERNOON)}
          />
          <label htmlFor="hourInput" className="text-sm">
            Tarde
          </label>
          <p className="absolute right-0 font-light text-sm">
            12:01h às 18:00h
          </p>
        </div>
        <div className="input-wrapper flex gap-2 py-4 relative border-b-2 rounded-md mb-16">
          <input
            type="radio"
            name="hourInput"
            checked={selectedRadio === OpeningHours.NIGHT}
            onChange={() => handleInputHour(OpeningHours.NIGHT)}
          />
          <label htmlFor="hourInput" className="text-sm">
            Noite
          </label>
          <p className="absolute right-0 font-light text-sm">
            18:01h às 23:00h
          </p>
        </div>
      </div>
      <div className="checkbox-wrapper flex gap-2 items-center relative">
        <input
          type="checkbox"
          name="closed"
          id="closed"
          checked={showClosed}
          onChange={(event) => handleInputClosedCheck(event.target.checked)}
        />
        <label htmlFor="closed">Exibir unidades fechadas</label>
        <p className="absolute right-0">
          Resultados encontrados:{" "}
          <span className="font-bold">{numberOfUnits}</span>
        </p>
      </div>
      <div className="btn-wrapper flex items-center justify-center gap-4">
        <button
          className="w-72 px-8 py-2 font-bold bg-yellow rounded-md"
          onClick={() => filterUnits()}
        >
          ENCONTRAR UNIDADE
        </button>
        <button
          className="w-72 px-8 py-2 font-bold border-2 border-border-gray rounded-md"
          onClick={() => handleClearRadio()}
        >
          LIMPAR
        </button>
      </div>
    </div>
  );
}
