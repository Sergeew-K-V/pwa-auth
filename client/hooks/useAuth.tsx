import { useState } from 'react'

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false)

  return {
    isAuth,
  }
}

export default useAuth
