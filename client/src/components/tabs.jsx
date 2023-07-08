import React from 'react'
import { TABS } from '../redux/actions/type'
import { useDispatch } from 'react-redux'
import { toggleTab } from '../redux/actions';
export default function Tabs({currentTab}) {
    const dispatch=useDispatch();
  return (
    <div className='f1'>
      {TABS.map(tab => (
        <button className={tab===currentTab?'button selected':'button'} onClick={()=>dispatch(toggleTab(tab))}>
            {tab}
        </button>
      ))}
    </div>
  )
}
