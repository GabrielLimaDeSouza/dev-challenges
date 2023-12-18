import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex items-center justify-center bg-black w-full h-32'>
        <Image src="/img/logo.svg" width="180" height="180" priority={true} alt='Logo SmartFit'/>
    </div>
  )
}
