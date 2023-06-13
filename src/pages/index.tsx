import { useState } from 'react'
import style from '../styles/Home.module.scss'

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <>
      <main className={`${style.main} ${isDark ? style.dark : ''}`} onClick={()=>{setIsDark(!isDark)}}>
        hello world
      </main>
    </>
  )
}
