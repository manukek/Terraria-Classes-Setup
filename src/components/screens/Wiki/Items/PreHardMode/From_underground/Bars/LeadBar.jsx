
import { Link } from 'react-router-dom'
import styles from '../../../../../../css/App.module.scss'

export const LeadBar = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Lead Bar</a> is an early-game metal bar created from Lead Ore which is normally found in the Cavern and Underground layers, used to create the Lead tier of equipment, along with many other items. It can also be placed on the ground, like furniture. Its alternate ore counterpart is the Iron Bar.</h1>    
      <div className=''>
        <div className=''>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='w-52' >Result</h1>
                  <div className='flex'>
                      <img className='w-8 h-6' src='https://terraria.wiki.gg/images/1/10/Lead_Bar.png'/> <h1 className=' ml-2 text-bold font-bold' >Lead Bar</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-4 h-4' src='https://terraria.wiki.gg/images/2/2e/Lead_Ore.png'/> <h1 className='ml-1 text-sm' >Lead Ore</h1><h1 className='ml-1 text-sm text-white/50 '>x3</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/0/0f/Furnace.png'/> <h1 to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2'>Furnace</h1>
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
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='ml-2 hover:underline hover:text-blue-500 duration-200 ' >Lead Anvil</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/1/10/Lead_Bar.png'/> <h1 className='ml-1 text-sm' >Lead bar</h1><h1 className='ml-1 text-sm text-white/50' >x5</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/9/91/Work_Bench.png'/> <h1 className='text-base ml-2 ' >Work Bench</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          





