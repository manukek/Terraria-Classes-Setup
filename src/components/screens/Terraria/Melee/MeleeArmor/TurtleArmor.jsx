import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TurtleArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Turtle armor</a> is a Hardmode armor set available after defeating all three mechanical bosses. A full set grants a vastly amplified Thorns effect upon taking contact damage from an enemy, which reflects  200%  of the enemys contact damage back at them and inflicts a knockback of 10 (Extremely strong).[1] The set consists of the Turtle Helmet, Turtle Scale Mail, and Turtle Leggings.

With no vanity items covering the Turtle armor, a turtle shell appears on the players back (much like the Leaf Blower, Flamethrower, Elf Melter, and Heat Ray backpacks), if the full set is equipped.

Crafting this set requires a total of 54 Chlorophyte Bars ( 270 /  324 Chlorophyte Ore) and 3 Turtle Shells.
        <div>
            <div className='mt-3'>
            <div className=''>
            <h1>+14% melee damage</h1>
            <h1>+12% melee critical strike chance</h1>
            <h1>+750 aggro</h1>
            <h1> +15% damage reduction</h1>
        </div>
            </div>
          </div>
        </h1>  
          
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='' src='/Turtle_armor.webp'/> <h1 className='mt-2 ml-2' >Turtle armor</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='w-8 h-6' src='/Chlorophyte_Bar.webp'/> <h1 className='ml-1 text-sm' >Chlorophyte Bar</h1><h1 className='ml-1 text-sm  text-white/75'>x54</h1>
                  </div>
                  <div className='flex mt-1' >
                    <img className='' src='/Turtle_Shell.webp'/> <h1 className='ml-1 text-sm' >Turtle Shell</h1><h1 className='ml-1 text-sm  text-white/75'>x3</h1>
                  </div>                
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
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
          


         