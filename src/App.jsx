import { useState } from 'react';
import Header from "./component/Header"
import Sidebar from "./component/Sidebar"
import Content from './component/Content';
import Smallsidebar from './component/Smallsidebar';


export default function App() {

  const [translate, settranslate] = useState(false);

  const opensider = () => {
    settranslate(!translate)
  };




  return (
    <div >

      <div className=" sticky top-0 z-10">
        <Header Opensider={opensider}></Header>
      </div>
      <div className='flex'>
        <div className={`${!translate?'hidden':'block'} md:${translate?'hidden':'block'}`} >
          <Sidebar></Sidebar>

        </div>
        <div className={`text-white ${translate?'hidden':'block'} md:${!translate? "hidden": "block"}  `} 
        // style={{display:translate?'block':'none'}}
        >
          <Smallsidebar></Smallsidebar>
        </div>
        <div >
          <Content></Content>
        </div>
      </div>

    </div>
  )
}




