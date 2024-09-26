
import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TerraBlade = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Terra Blade</a> is a Hardmode, post-Plantera projectile sword that fires a wide green slash wave projectile with each swing. It also has a large aura of energy around the blade when swung, which significantly increases the range at which the weapon can deal damage to enemies, including coverage behind the player. The Terra Blades projectile deals 100% of the weapons damage at first and pierces an infinite amount of targets before applying a 25% damage penalty for each target it pierces.[1] The projectile will disappear after 1.5 seconds,[2] upon hitting a solid block, or when its damage falls to 0 after piercing.[3] The Terra Blade creates a unique green flash if the blade, its aura, or its projectile strikes an enemy.

It is later used to craft the Zenith, which is the strongest melee weapon in the game.

Its best modifier is Legendary. While Light does decrease the base use time by 1, the added critical strike chance and the multiplicative damage bonuses of Legendary are better in any practical use case.</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
<div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/4/4d/Terra_Blade.png'/> <h1 className='mt-2 ml-2  font-bold' >Terra Blade</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/2/28/True_Night%27s_Edge.png'/> <Link to='/meleeWeapons/trueNightsEdge' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >True Nights Edge</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/5/51/True_Excalibur.png'/> <Link to='/meleeWeapons/TrueExcalibur' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >True Excalibur</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/e/e3/Broken_Hero_Sword.png'/> <h1 className='ml-2 text-sm ' >Broken Hero Sword</h1>
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





