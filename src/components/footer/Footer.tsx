import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {



  return (
    <>
      <div className="flex justify-center bg-purple-950 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Farma.Com - Talia Moura| Copyright: 2024</p>
          <p className='text-lg'>Acesse minhas redes sociais</p>
          <div className='flex gap-2'>
            <LinkedinLogo size={48} weight='bold' />
            <GithubLogo size={48} weight='bold' />
            <InstagramLogo size={48} weight='bold' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer