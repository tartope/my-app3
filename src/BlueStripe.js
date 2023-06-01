import React from 'react'
import './BlueStripe.scss'
import { userNameAtom } from './atoms'
// Uses the useRecoilValue() hook which only allows read only access to our atom
import { useRecoilValue } from 'recoil'

export const BlueStripe = () => {
  const userName = useRecoilValue(userNameAtom);
  return (
    <div className='BlueStripe'>
        Username: {userName}
    </div>
  )
}
