import Image from 'next/image'

const Footer = (): JSX.Element => {
  return (
    <div className='grid grid-cols-2'>
      <div>Copyright © 2023 Fobbelend, Inc. All rights reserved</div>
      <div>
        <Image className='w-12' width={100} height={100} alt={'logo'} src={'/LogoKitchen.svg'} />
      </div>
    </div>
  )
}

export default Footer
