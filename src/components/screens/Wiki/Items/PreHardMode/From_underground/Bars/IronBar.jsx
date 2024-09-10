
import { Link } from 'react-router-dom'
import styles from '../../../../../../css/App.module.scss'

export const IronBar = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Iron Bar</a> is an early-game metal bar, used to create the Iron tier of equipment, along with many other items. It can also be placed on the ground, like furniture. Its alternate ore counterpart is the Lead Bar.</h1>    
      <div className=''>
        <div className=''>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='w-52' >Result</h1>
                  <div className='flex'>
                      <img className='w-8 h-6' src='https://terraria.wiki.gg/images/6/6c/Iron_Bar.png'/> <h1 className=' ml-2 text-bold' >Iron Bar</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/8/87/Iron_Ore.png'/> <h1 className='ml-1 text-sm' >Iron Ore</h1><h1 className='ml-1 text-sm text-white/50 '>x3</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/0/0f/Furnace.png'/> <h1 to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2' >Furnace</h1>
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
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='ml-2  text-links hover:underline duration-75' >Iron Anvil</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/6/6c/Iron_Bar.png'/> <h1 className='ml-1 text-sm' >Iron bar</h1><h1 className='ml-1 text-sm text-white/50' >x5</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/9/91/Work_Bench.png'/> <Link className='text-base ml-2  text-links hover:underline duration-75' >Work Bench</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          





