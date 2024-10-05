import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const BeetleArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Beetle armor </a>is a Hardmode, post-Golem armor set that grants melee damage and defensive bonuses. It is the final melee armor set available on the Old-gen console version Old-gen console version and Nintendo Nintendo 3DS version version. On the Desktop version Desktop version, Console version Console version, and Mobile version Mobile version, it is the penultimate melee armor set, followed by Solar Flare armor.

The set consists of the Beetle Helmet and Beetle Leggings, as well as two different chestpiece variants: the Beetle Scale Mail and Beetle Shell.

Crafting the full set while wearing either the Beetle Scale Mail or Beetle Shell grants a different set bonus: wearing the Beetle Scale Mail enhances damage output and grants the Beetle Might buff, whereas the Beetle Shell provides more defense and can grant the Beetle Endurance buff.

<a className='font-bold underline'>Crafting the full set with one chest piece requires 18 Beetle Husks and a full set of Turtle armor (54 Chlorophyte Bars (or  270 /  324 pieces of Chlorophyte Ore), and 3 Turtle Shells). Crafting all four pieces from scratch requires 26 Beetle Husks, 78 Chlorophyte Bars (or  390 /  468 pieces of Chlorophyte Ore), and 4 Turtle Shells.</a></h1>
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
     
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017] h-52'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                  <img className='' src='/Beetle_armor.webp'/> <h1 className='ml-1  ' >Beetle Armor</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-48 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='' src='/Turtle_armor.webp'/> <h1 className='mt-2 ml-2' >Turtle armor</h1>
                  </div>
                  <div className='flex mt-1' >
                    <img className='' src='/Beetle_Husk.webp'/> <h1 className='ml-1 text-sm ' >Beetle Husk</h1><h1 className='ml-1 text-sm text-white/75'>x18</h1>
                  </div>                
              </div>
              <div className='border border-gray-300 h-48 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Mythril_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2    hover:underline hover:text-blue-500 duration-200 ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Orichalcum_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200 ' >Orichalcum Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
        </div>
      </div>
  )
}
          


         