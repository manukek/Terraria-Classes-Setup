
import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'

export const Vine = () => {
  return (
    <div className={styles.main}>
        <h1 ><a className='font-bold'>Vines</a> are crafting materials dropped by Man Eaters in the Underground Jungle biome with a 1/2 (50%) / 100% drop chance.</h1>    
      <div className=''>
        <div>
            <h1>Obtained from</h1>
            <div className='flex' >
                <img src='https://terraria.wiki.gg/images/3/36/Man_Eater.gif'/> <h1 className='ml-2'>Man Eater</h1> <h1 className='ml-1' >50%/</h1> <h1 className='text-yellow-500' >100%</h1>
            </div>
        </div>
        <div className=''>
          <h1 className='' >Used in</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <Link className='mt-2 ml-2' >Blade of Grass</Link>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/6/61/Jungle_Spores.png'/> <Link to='/wiki/items/jungle_Spore' className='ml-1 text-sm' >Jungle Spores x15</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/b/b6/Stinger.png'/> <Link to='/wiki/items/stinger' className='ml-1 text-sm' >Stingers x12</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/f/ff/Vine.png'/> <Link to='/wiki/items/vine' className='ml-2 text-sm' >Vine x3</Link>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2' >Iron anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
