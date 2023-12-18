import InformationCard from "./information-card";

export default function InformationBanner() {
  return (
    <div className="w-full bg-background-gray px-2 py-4 flex flex-wrap 2xl:flex-nowrap gap-4 justify-between mb-12">
      <div className="w-full flex gap-4 justify-between">
        <InformationCard title="Máscara" img1="required-mask.png" img2="recommended-mask.png" desc1="Obrigatório" desc2="Recomendado"/>
        <InformationCard title="Toalha" img1="required-towel.png" img2="recommended-towel.png" desc1="Obrigatório" desc2="Recomendado"/>
      </div>
      <div className="w-full flex gap-4 justify-between">
        <InformationCard title="Bebedouro" img1="partial-fountain.png" img2="forbidden-fountain.png" desc1="Parcial" desc2="Proibido"/>
        <InformationCard title="Vestiários" img1="required-lockerroom.png" img2="partial-lockerroom.png" img3="forbidden-lockerroom.png" desc1="Liberado" desc2="Parcial" desc3="Fechado" />
      </div>
    </div>
  );
}