import Image from 'next/image'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <div className='grid grid-cols-3 sticky items-center'>
      <div>
        <Image className='w-16' src={'/LogoKitchen.svg'} alt='search' width={100} height={100} />
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
      <div className='grid grid-cols-3'>
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
            <input
              type='search'
              id='search'
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search'
              required
            />
            <Image
              className='w-6 absolute right-1 top-2'
              src={'/magnifying-glass-backup-svgrepo-com.svg'}
              alt='search'
              width={100}
              height={100}
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
