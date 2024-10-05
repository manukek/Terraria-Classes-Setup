import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const OpticStaff = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Optic Staff</a> is a Hardmode summon weapon that summons a miniature version of The Twins in their second form as minions, which follow the player and attack enemies. The summoned pair of minions, named Spazmamini and Retanimini, deal damage with a ramming attack and ranged laser attack, respectively. Like other minions, the summoned Twins are invincible and follow the player for an unlimited amount of time, unless the player dies, summons a replacement minion, cancels the buff, or leaves the world.

Its best modifiers are Mythical, Furious, or Godly. Rounding reveals that these modifiers provide the same increase to damage as the Ruthless modifier, increasing it from 24 to 28 on the Desktop version Desktop version, Console version Console version, and Mobile version Mobile version and from 30 to 35 on the Old-gen console version Old-gen console version.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/8/86/Optic_Staff.png'/> <h1 className=' ml-2 font-bold' >Optic Staff</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/c/c4/Black_Lens.png'/> <h1 className='ml-1 text-sm ' >Black Lens</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/a/ae/Lens.png'/> <h1 className='ml-1 text-sm ' >Lens</h1><h1 className='ml-1 text-sm text-white/75'>x2</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/d/d9/Hallowed_Bar.png'/> <h1 className='ml-1 text-sm ' >Hallowed Bar</h1><h1 className='ml-1 text-sm text-white/75'>x12</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/0/0f/Soul_of_Sight.png'/> <h1 className='ml-1 text-sm ' >Soul of Sight</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                    <img className='w-8 h-5 ' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200   ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                    <img className='w-8 h-5' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvilr</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         