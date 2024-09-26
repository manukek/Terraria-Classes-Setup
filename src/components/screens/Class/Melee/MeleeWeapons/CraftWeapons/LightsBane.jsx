import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'

export const LightsBane = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>Lights Bane </a>it creates a short-lived slash of darkness near the tip of the sword each time it is swung. The slashes have 5 armor penetration,[1] and will automatically target enemies within a radius of 3.125 tiles. There are two types of slashes: default small slashes, and random big slashes. Small slashes deal 50% base damage (8 base damage), while big slashes deal 100% base damage (16 base damage). The chance of big slashes occurring equals to the players melee critical strike chance.[2]

The Lights Banes Crimson counterpart is the Blood Butcherer, which is stronger and larger but also much slower, and it is one of the key ingredients in crafting the Nights Edge.

Its best modifier is Legendary.</h1>    
      <div className=''>
        <div className=''>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='w-52' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/1/13/Light%27s_Bane.png'/> <h1 className='mt-2 ml-2 font-bold' >Lights Bane</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/6/67/Demonite_Bar.png'/> <h1 className='ml-1 text-sm ' >Demonite Bars</h1><h1 className='ml-1 text-sm text-white/75'>x10</h1>
                  </div>
                  <div>
                    <h1 className='ml-1 text-sm text-white/75' >or</h1>
                  </div>
                  <div className='flex ' >
                      <img className='' src='https://terraria.wiki.gg/images/a/a8/Demonite_Ore.png'/> <h1 className='ml-1 text-sm text-white/75 ' >Demonite Ore</h1><h1 className='ml-1 text-sm text-white/75'>x30</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200 ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200 ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
        <div className=''>
          <h1 className='' >Used in</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <Link to='/meleeWeapons/nightsEdge' className='mt-2 ml-2   hover:underline hover:text-blue-500 duration-200 ' >Nights Edge</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/1/13/Light%27s_Bane.png'/> <h1 className='ml-1 text-sm font-bold' >Lights Bane</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-12 h-14' src='https://terraria.wiki.gg/images/c/c2/Muramasa.png'/> <Link to='/meleeWeapons/muramasa' className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200 ' >Muramasa</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-16 h-16' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <Link to='/meleeWeapons/bladeofgrass' className='  hover:underline hover:text-blue-500 duration-200 ' >Blade of Grass</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-16 h-16' src='https://terraria.wiki.gg/images/c/cf/Volcano.png'/> <Link to='/meleeWeapons/volcano' className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200 ' >Volcano</Link>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-12 h-8 ' src='https://terraria.wiki.gg/images/f/f8/Demon_Altar.png'/> <h1 className='text-base ml-2 ' >Demon altar</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-12 h-8' src='https://terraria.wiki.gg/images/7/70/Crimson_Altar.png'/> <h1 className='text-base ml-2 ' >Crimson Altar</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          
