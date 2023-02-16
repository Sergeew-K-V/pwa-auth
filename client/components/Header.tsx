import Image from 'next/image'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <div className='grid grid-cols-3 sticky items-center gap-x-4 top-0'>
      <div className='ml-8'>
        <Link href={'/'}>
          <Image className='w-16' src={'/LogoKitchen.svg'} alt='search' width={100} height={100} />
        </Link>
      </div>
      <div>
        <nav>
          <ul className='grid grid-cols-3'>
            <li>
              <Link className='font-medium hover:underline' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='font-medium hover:underline' href='/gallery'>
                Gallery
              </Link>
            </li>
            <li>
              <Link className='font-medium hover:underline' href='/account'>
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='grid grid-cols-3 gap-x-8'>
        <div>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option selected>Русский</option>
            <option value='US'>English</option>
          </select>
        </div>
        <div>
          <label
            htmlFor='search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Search
          </label>
          <div className='relative items-center'>
            <Image
              className='w-5 absolute left-2 top-1/2 -translate-y-1/2'
              src={'/magnifying-glass-backup-svgrepo-com.svg'}
              alt='search'
              width={100}
              height={100}
            />
            <input
              type='search'
              id='search'
              className='block w-full p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search'
              required
            />
          </div>
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
