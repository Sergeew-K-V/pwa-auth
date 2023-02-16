import Image from 'next/image'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <div className='grid grid-cols-3 sticky w-full'>
      <div>
        <Image className='w-16' src={'/LogoKitchen.svg'} alt='search' width={100} height={100} />
      </div>
      <div>
        <nav>
          <ul className='grid grid-cols-3'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link href='/account'>Account</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='grid grid-cols-3'>
        <div>
          <select>
            <option value='ru' selected>
              Русский
            </option>
            <option value='en'>English</option>
          </select>
        </div>
        <div className='grid grid-cols-2'>
          <input type='text' placeholder='Sofa...' />
          <Image
            className='w-6'
            src={'/magnifying-glass-backup-svgrepo-com.svg'}
            alt='search'
            width={100}
            height={100}
          />
        </div>
        <div>
          <button>
            <Link href='/basket'>
              <Image
                className='w-8'
                src={'/bag-svgrepo-com.svg'}
                alt='bag'
                width={100}
                height={100}
              />
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
