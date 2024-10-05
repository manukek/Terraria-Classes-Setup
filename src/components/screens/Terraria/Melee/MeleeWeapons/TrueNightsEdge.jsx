import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TrueNightsEdge = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The True Nights Edge</a> is a Hardmode sword that is a stronger version of the Nights Edge, doing more damage and firing a projectile when swung. It is one of the ingredients necessary to craft the Terra Blade. The True Nights Edge is capable of autoswing.

The sword itself has a large aura of dark energy around the blade when swung, which significantly increases the range at which the weapon can deal damage to enemies, including coverage behind the player. Each time the sword swings, a projectile resembling a spinning disc of energy will be fired. The projectile will move relative to the player, staying on the same course on the screen as the player moves. The projectile deals 50% damage (35 base damage)[1] and strikes up to 3 times. It also applies 10 ticks[2] of immunity frames on the targets it hits, but can still hit a target multiple times (if the target is large enough for the projectiles to still stay on it after 10 ticks).[3] If the blade or its aura strikes an enemy, a purple flash is created. If its projectile strikes an enemy, a green flash is created.

Its best modifier is Legendary.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-10 h-10' src='/True_Nights_Edge.webp'/> <h1 className='mt-2 ml-2  font-bold' >True Nights Edge</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='/Nights_Edge.webp'/> <Link to='/meleeWeapons/nightsEdge' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >Nights Edge</Link>
                  </div>
                  <div className='flex mt-1' >
                    <img className='' src='/Soul_of_Fright.webp'/> <h1  className='ml-1 text-sm ' >Soul of Fright</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
                  <div className='flex mt-1' >
                    <img className='' src='/Soul_of_Might.webp'/> <h1 className='ml-2 text-sm ' >Soul of Might</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
                  <div className='flex mt-1' >
                    <img className='' src='/Soul_of_Sight.webp'/> <h1 className='ml-2 text-sm  ' >Soul of Sight</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-5 ' src='/Mythril_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200   ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-5' src='/Orichalcum_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvilr</Link>
                  </div>
              </div>
          </div>
        </div>
        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-10 h-10' src='/Terra_Blade.webp'/> <Link to='/meleeWeapons/terraBlade' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Terra Blade</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                     <img className='w-10 h-10' src='/True_Nights_Edge.webp'/> <Link to='/meleeWeapons/trueNightsEdge' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >True Nights Edge</Link>
                  </div>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='/True_Excalibur.webp'/> <Link to='/meleeWeapons/TrueExcalibur' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >True Excalibur</Link>
                  </div>
                  <div className='flex mt-1' >
                  <img className='' src='/Broken_Hero_Sword.webp'/> <h1 className='ml-2 text-sm ' >Broken Hero Sword</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-5 ' src='/Mythril_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200   ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-5' src='/Orichalcum_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvilr</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}