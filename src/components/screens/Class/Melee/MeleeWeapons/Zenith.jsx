import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const Zenith = () => {
  return (
    <div className={styles.mainMelee}>
        <h1 className='' ><a className='font-bold'>The Zenith</a> is a Hardmode, post-Moon Lord melee weapon crafted using a variety of swords obtained throughout the games progression. When swung, the sword sprites of the Zeniths component swords fly towards enemies within a 20-tile radius of the cursor (regardless of where the cursor is on the screen), and circle back in quick, frenzied arcs. They are summoned immediately behind the player while passing through solid blocks, and three swords will appear per use (at base melee speed), with each sword sprite dealing the weapons full base damage. The Zenith also has a base 14% critical strike chance as opposed to the usual 4%.

Its best modifier is Legendary.</h1>    
      <div className='mt-4 flex justify-between'>
        <div className=' w-96'>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='t' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/6/66/Zenith.png'/> <h1 className='mt-2 ml-2' >Zenith</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/4/4d/Terra_Blade.png'/> <h1 className='ml-1 text-sm' >Terra Blade</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/6/63/Meowmere.png'/> <h1 className='ml-1 text-sm' >Meowmere</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/8/83/Star_Wrath.png'/> <h1 className='ml-1 text-sm' >Star Wrath</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/d/d2/Influx_Waver.png'/> <h1 className='ml-1 text-sm' >Influx Waver</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/9/93/The_Horseman%27s_Blade.png'/> <h1 className='ml-1 text-sm' >The Horseman Blade</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/a/a0/Seedler.png'/> <h1 className='ml-1 text-sm' >Seedler</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/2/2d/Starfury.png'/> <h1 className='ml-1 text-sm' >Starfury</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/4/42/Bee_Keeper.png'/> <h1 className='ml-1 text-sm' >Bee Keeper</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/b/b3/Enchanted_Sword_%28item%29.png'/> <h1 className='ml-1 text-sm' >Enchanted Sword</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/8/8b/Copper_Shortsword.png'/> <h1 className='ml-1 text-sm' >Copper Shortsword</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2' >Orichalcum Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
        </div>
      </div>
  )
}

