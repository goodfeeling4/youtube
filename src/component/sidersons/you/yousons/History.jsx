// import React from 'react'
import history from '../../../../assets/icon/history.svg'

export default function History() {
  return (
    <div className='flex gap-3 cursor-pointer'>
            <img src={history} alt="" className='invert'/>
            <span>History</span>
    </div>
  )
}
