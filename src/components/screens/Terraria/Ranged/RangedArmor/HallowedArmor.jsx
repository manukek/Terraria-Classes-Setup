import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const HallowedArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Hallowed armor</a> is a Hardmode armor set crafted from Hallowed Bars, which are dropped by the mechanical bosses.

The set consists of the Hallowed Plate Mail and Hallowed Greaves, as well as four different headpiece variants: the Hallowed Mask, Hallowed Helmet, Hallowed Headgear, and Hallowed Hood, which grant specialized bonuses towards melee, ranged, magic, and summon damage respectively.

Wearing the full set will grant the Holy Protection buff, which allows the player to dodge the next attack dealt by an enemy. It has a cooldown of 30 seconds, starting from the moment of the dodge. Wearing the full set with the Hallowed Hood additionally increases minion capacity by 2 as a set bonus, making the total minion capacity of the Hallowed Hood set 3, for a total minion count of 4. Additionally, wearing the full set also gives off a faint pulsing aura around the player and displays an after-image effect while in motion.

Crafting a full set with one headpiece requires 54 Hallowed Bars, or 90 Hallowed Bars for the full set including all four headpieces. To acquire the necessary Hallowed Bars for a full set with one helmet, the player will need to kill at least 2 mechanical bosses, and all four helmets will require 3–5 kills.

It currently shares identical stats with Ancient Hallowed armor, but differs in appearance. Furthermore, Ancient Hallowed and Hallowed armor pieces can be mixed and matched while still providing their set bonus.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-60'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className=' mt-3'>
                    <img className='' src='/Hallowed_armor.webp'/> <h1 className='mt-2 ml-2 font-bold' >Hallowed armor</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Hallowed_Bar.webp'/> <h1 className='ml-1 text-sm ' >Hallowed Bar</h1><h1 className='ml-1 text-sm text-white/75'>x54</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
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
          


         