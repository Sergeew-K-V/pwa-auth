import Image from 'next/image'

const Footer = (): JSX.Element => {
  return (
    <div className='grid grid-cols-2 sticky items-center gap-x-4 justify-items-center border-t-2 p-2'>
      <div>Copyright © 2023 Fobbelend, Inc. All rights reserved</div>
      <div>
        <Image
          priority
          className='w-12'
          width={100}
          height={100}
          alt={'logo'}
          src={'/LogoKitchen.svg'}
        />
      </div>
    </div>
  )
}

export default Footer
