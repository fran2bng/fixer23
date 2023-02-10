import React from 'react'
import { context } from './contex/authContext'
import { useContext } from 'react'

export function Home() {

  const authContext = useContext(context)
  console.log(authContext);

  return (
    <div>Home</div>
  )
}
