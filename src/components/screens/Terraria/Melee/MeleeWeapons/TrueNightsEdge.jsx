import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TrueNightsEdge = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The True Nights Edge</a> is a Hardmode sword that is a stronger version of the Nights Edge, doing more damage and firing a projectile when swung. It is one of the ingredients necessary to craft the Terra Blade. The True Nights Edge is capable of autoswing.

The sword itself has a large aura of dark energy around the blade when swung, which significantly increases the range at which the weapon can deal damage to enemies, including coverage behind the player. Each time the sword swings, a projectile resembling a spinning disc of energy will be fired. The projectile will move relative to the player, staying on the same course on the screen as the player moves. The projectile deals 50% damage (35 base damage)[1] and strikes up to 3 times. It also applies 10 ticks[2] of immunity frames on the targets it hits, but can still hit a target multiple times (if the target is large enough for the projectiles to still stay on it after 10 ticks).[3] If the blade or its aura strikes an enemy, a purple flash is created. If its projectile strikes an enemy, a green flash is created.

Its best modifier is Legendary.</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
<div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/2/28/True_Night%27s_Edge.png'/> <h1 className='mt-2 ml-2  font-bold' >True Nights Edge</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <Link to='/meleeWeapons/nightsEdge' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >Nights Edge</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/8/80/Soul_of_Fright.png'/> <h1  className='ml-1 text-sm ' >Soul of Fright</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/3/39/Soul_of_Might.png'/> <h1 className='ml-2 text-sm ' >Soul of Might</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/0/0f/Soul_of_Sight.png'/> <h1 className='ml-2 text-sm  ' >Soul of Sight</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
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
