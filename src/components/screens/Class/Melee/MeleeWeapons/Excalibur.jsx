import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const Excalibur = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Excalibur</a> is a Hardmode sword which is capable of autoswing and can be crafted with Hallowed Bars. When swung, it emits yellow light particles typical of the Hallowed theme. It can be upgraded into the True Excalibur.

On the Desktop version Desktop version, Console version Console version, and Mobile version Mobile version, the sword has a large aura of bright yellow energy around the blade when swung, which significantly increases the range at which the weapon can deal damage to enemies, including coverage behind the player. If an enemy is struck by the blade or its aura, a yellow flash is created.

Its best modifier is Legendary.</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
<div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/f/fa/Excalibur.png'/> <h1 className='mt-2 ml-2  font-bold' >Excalibur</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/d/d9/Hallowed_Bar.png'/> <h1 to='/meleeWeapons/nightsEdge' className='ml-1 text-sm ' >Hallowed Bar</h1><h1 className='ml-1 text-sm  text-white/75'>x12</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200 ' >Orichalcum Anvilr</Link>
                  </div>
              </div>
          </div>
    </div>
  )
}
