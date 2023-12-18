import Image from "next/image"

interface InformationCard {
    title: string,
    img1: string,
    img2: string,
    img3?: string;
    desc1: string,
    desc2: string;
    desc3?: string;
}

export default function InformationCard({title, img1 , img2 , img3, desc1, desc2, desc3} : InformationCard) {
  return (
    <div className="container flex flex-col gap-2 w-full">
        <div className="title flex items-center justify-center">
            <h4 className="font-bold">{title}</h4>
        </div>
        <div className="icons flex gap-4 items-center justify-around">  
            <Image src={`/img/information-card/${img1}`} height="64" width="64" alt={`${title} ${desc1}`} />
            <Image src={`/img/information-card/${img2}`} height="64" width="64" alt={`${title} ${desc2}`} />
            {img3 &&
                <Image src={`/img/information-card/${img3}`} height="64" width="64" alt={`${title} ${desc3}`} />
            }
        </div>
        <div className="description flex gap-4 items-center justify-around">
            <p>{desc1}</p>
            <p>{desc2}</p>
            {desc3 &&
                <p>{desc3}</p>
            }
        </div>
    </div>
  )
}
