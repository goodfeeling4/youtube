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

      <div className=" sticky top-0 backdrop:blur-2xl z-10">
        <Header Opensider={opensider}></Header>
      </div>
      <div className='flex '>
        <div className='w-[15vw]' style={{
          display: translate? 'none' : 'block',
        }}>
          <Sidebar></Sidebar>

        </div>
        <div className='text-white ' style={{display:translate?'block':'none'}}>
          <Smallsidebar></Smallsidebar>
        </div>
        <div>
          <Content></Content>
        </div>
      </div>

    </div>
  )
}




