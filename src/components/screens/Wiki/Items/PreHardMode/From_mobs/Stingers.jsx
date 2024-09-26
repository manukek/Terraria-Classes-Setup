
import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'

export const Stingers = () => {
  return (
    <div className={styles.main}>
        <h1 ><a className='font-bold'>The Stinger</a> is a crafting material used in various Jungle-themed crafting recipes. It is obtained from Spiked Jungle Slimes, Hornets, and Moss Hornets found in the Underground Jungle biome.</h1>    
      <div className=''>
        <div>
            <h1>Obtained from</h1>
            <div className='flex' >
                <img src='https://terraria.wiki.gg/images/4/45/Hornet.gif'/> <h1 className='mx-1 '>Hornet </h1> <h1>66%</h1>
            </div>
            <div className='flex' >
                <img src='https://terraria.wiki.gg/images/0/09/Spiked_Jungle_Slime.gif'/> <h1 className='mx-1'>Spiked Jungle Slime</h1> <h1>50%</h1>
            </div>
        </div>
        <div className=''>
          <h1 className='' >Used in</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <Link to='/meleeWeapons/bladeOfGrass' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200 ' >Blade of Grass</Link>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/6/61/Jungle_Spores.png'/> <Link to='/wiki/items/jungle_Spore' className='ml-1 text-sm  hover:underline hover:text-blue-500 duration-200 ' >Jungle Spores</Link><h1 className='ml-1 text-sm  text-white/75'>x15</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/b/b6/Stinger.png'/> <h1 to='/wiki/items/stinger' className='ml-1 text-sm font-bold' >Stingers</h1><h1 className='ml-1 text-sm  text-white/75'>x12</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/f/ff/Vine.png'/> <Link to='/wiki/items/vine' className='ml-2 text-sm  hover:underline hover:text-blue-500 duration-200 ' >Vine</Link><h1 className='ml-1 text-sm  text-white/75'>x3</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200 ' >Iron anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200 ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
