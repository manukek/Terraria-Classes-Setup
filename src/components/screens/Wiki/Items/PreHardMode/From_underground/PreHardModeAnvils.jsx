import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'

export const PreHardModeAnvils = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Iron Anvil</a> and <a className='font-bold' >Lead Anvil</a> are pre-Hardmode crafting stations used mainly to craft weapons and armor. Both anvils can craft the same items. Most of their recipes require metal bars, although they are also used to make other items, such as the Jungle tier of equipment. An anvil is a vital crafting station for most of the game, as it is used to make items from every tier up to Cobalt and Palladium, after which it must be replaced by a Mythril Anvil or Orichalcum Anvil.

Both anvils are craftable, but can sometimes also be found in Underground Cabins. The Iron Anvil can furthermore be purchased from the Merchant.</h1>    
      <div className=''>
        <div className=' w-96'>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <h1 className=' ml-2' >Iron Anvil</h1>
                  </div>
                  <div className='flex'>
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <h1 className=' ml-2' >Lead Anvil</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-8 h-6' src='https://terraria.wiki.gg/images/6/6c/Iron_Bar.png'/> <Link to='/wiki/preHardMode/ironBar' className='ml-1 text-sm  text-links hover:underline duration-75' >Iron Bar x5</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-6' src='https://terraria.wiki.gg/images/1/10/Lead_Bar.png'/> <Link to='/wiki/preHardMode/leadBar'className='ml-1 text-sm text-links hover:underline duration-75' >Lead Bar x5</Link>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/9/91/Work_Bench.png'/> <h1 className='text-base ml-2' >Work Bench</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

