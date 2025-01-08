import Subs from "./smallersidebarSons/mainson/Ssubscription"
import Shorts from "./smallersidebarSons/mainson/Sshorts"
import Home from "./smallersidebarSons/mainson/SHome"


export default function Smallsidebar() {
  return (
    <div className="grid text-xs text-center gap-7 ml-2 mt-4 ">
      <div>
      <Home></Home>

      </div>
      <div>
      <Shorts></Shorts>

      </div>
      <div>
      <Subs></Subs>

      </div>
    </div>
  )
}
