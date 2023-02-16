interface ILink {
  title: string
  href: string
}

export const linkList: ILink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Gallery',
    href: '/gallery',
  },
  {
    title: 'Account',
    href: '/account',
  },
]

interface ILanguage {
  displayName: string
  value: string
}

export const languageList: ILanguage[] = [
  { displayName: 'Русский', value: 'RU' },
  { displayName: 'English', value: 'EN' },
]
