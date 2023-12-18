
export default function Layout({children} : {children : React.ReactNode}) {
  return (
    <div className='bg-white px-16 py-16 md:px-36'>
        {children}
    </div>
  )
}
