import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const NightsEdge = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Nights Edge</a> is a pre-Hardmode, post-Skeletron sword. When swung, it emits fire-like purple particles, similar to the swords used in crafting it, but the effect is more subtle and does not last as long. It is notable for having, on par with Volcano, the highest base damage of a sword available before entering Hardmode.

A purple aura comes off of the Nights Edge when swung, following the swing and increasing the range at which it can hit enemies. The aura also swings around a second time on its own, further increasing range and even covering behind the player. This aura can break Pots through walls, but cannot damage enemies there. If the blade or its aura strikes an enemy, a purple flash is created. The Nights Edge is also capable of autoswing.

Once in Hardmode, the Nights Edge can be upgraded into the True Nights Edge.

Its best modifier is Legendary.</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
<div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <h1 className='mt-2 ml-2  font-bold' >Nights Edge</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/1/13/Light%27s_Bane.png'/> <Link to='/meleeWeapons/lightsBane' className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200 ' >Lights Bane</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-12 h-14' src='https://terraria.wiki.gg/images/c/c2/Muramasa.png'/> <Link to='/meleeWeapons/muramasa' className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200 ' >Muramasa</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-16 h-16' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <Link to='/meleeWeapons/bladeofgrass' className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Blade of Grass</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-16 h-16' src='https://terraria.wiki.gg/images/c/cf/Volcano.png'/> <Link to='/meleeWeapons/volcano' className='ml-2 text-sm  hover:underline hover:text-blue-500 duration-200 ' >Volcano</Link>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-12 h-8 ' src='https://terraria.wiki.gg/images/f/f8/Demon_Altar.png'/> <h1 className='text-base ml-2 ' >Demon altar</h1>
                  </div>
                  <div className='flex' >
                      <img className='w-12 h-8' src='https://terraria.wiki.gg/images/7/70/Crimson_Altar.png'/> <h1 className='text-base ml-2 ' >Crimson Altar</h1>
                  </div>
              </div>
          </div>
    </div>
  )
}
