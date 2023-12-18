import Image from 'next/image'

export default function Footer() {
  return (
    <div className='py-12 flex flex-col items-center justify-center gap-4 bg-footer-color w-full h-48'>
        <Image src="/img/logo.svg" width="120" height="120" alt='Smartfit Logo'/>
        <p className='text-white text-sm'>Todos os direitos reservados - 2020</p>
    </div>
  )
}
