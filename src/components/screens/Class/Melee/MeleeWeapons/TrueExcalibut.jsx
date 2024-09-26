import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TrueExcalibur= () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The True Excalibur</a> is a Hardmode sword that is a direct upgrade to the Excalibur. It is one of the ingredients necessary to craft the Terra Blade.

The True Excalibur possesses a stronger version of the Excaliburs effect, adding an additional pink aura past the existing yellow aura from its predecessor, which both follow along the swords swing arc to increase its effective range. When the sword or its auras strike enemies, a bright pink and yellow flash is created.

Its best modifier is Legendary.</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
<div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/5/51/True_Excalibur.png'/> <h1 className='mt-2 ml-2  font-bold' >True Excalibur</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/f/fa/Excalibur.png'/> <Link to='/meleeWepons/excalibur' className='ml-1 text-sm mt-2 text-blue-500 hover:underline duration-75' >Excalibur</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/0/03/Chlorophyte_Bar.png'/> <h1  className='ml-1 text-sm ' >Chlorophyte Bar</h1><h1 className='ml-1 text-sm text-white/75'>x24</h1>
                  </div>
              </div>
              <div className=' p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-5 ' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200   ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-5' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvilr</Link>
                  </div>
              </div>
          </div>
    </div>
  )
}
