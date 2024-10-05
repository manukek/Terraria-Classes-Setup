import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'
export const ShroomiteArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Shroomite armor</a> is a Hardmode, post-Plantera armor set that boosts the damage of ranged weapons. It is the second-strongest ranger armor available, only beaten by Vortex armor / Titan armor.

Crafting the full set with a single headpiece requires 54 Shroomite Bars (or 810 Glowing Mushrooms and  270 /  324 Chlorophyte Ore). A full set with all three headpieces requires 78 Shroomite Bars (1170 Glowing Mushrooms and  390 /  468 Chlorophyte Ores).

The set consists of the Shroomite Breastplate and Shroomite Leggings, as well as three different headpiece variants: the Shroomite Headgear, Shroomite Mask, and Shroomite Helmet, geared towards increasing the damage of specific ranged weapon classes.

A full set of Shroomite armor provides the following bonuses:
<div className='ml-2'>
    <h1>+51 defense</h1>
    <h1>+13% ranged damage</h1>
    <h1>+25% ranged critical strike chance</h1>
    <h1>+20% chance not to consume ammo</h1>
    <h1>+12% movement speed</h1>
</div>

</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='max-h-11' src='/Shroomite_armor.webp'/> <h1 className=' ml-2 font-bold' >Shroomite Armor</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Shroomite_Bar.webp'/> <h1 className='ml-1 text-sm ' >Shroomite Bar</h1><h1 className='ml-1 text-sm text-white/75'>x54</h1>
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
          


         