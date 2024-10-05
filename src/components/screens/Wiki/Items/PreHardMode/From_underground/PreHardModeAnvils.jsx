import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'

export const PreHardModeAnvils = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Iron Anvil</a> and <a className='font-bold' >Lead Anvil</a> are pre-Hardmode crafting stations used mainly to craft weapons and armor. Both anvils can craft the same items. Most of their recipes require metal bars, although they are also used to make other items, such as the Jungle tier of equipment. An anvil is a vital crafting station for most of the game, as it is used to make items from every tier up to Cobalt and Palladium, after which it must be replaced by a Mythril Anvil or Orichalcum Anvil.

Both anvils are craftable, but can sometimes also be found in Underground Cabins. The Iron Anvil can furthermore be purchased from the Merchant.</h1>
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                     <img className='w-8 h-4' src='/Iron_Anvil.webp'/> <h1 className='font-bold ml-2' >Iron Anvil</h1>
                  </div>
                  <div className='flex mt-3'>
                     <img className='w-8 h-4' src='/Lead_Anvil.webp'/> <h1 className='font-bold ml-2' >Lead Anvil</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                  <img className='w-8 h-6' src='/Iron_Bar.webp'/> <Link to='/wiki/preHardMode/ironBar' className='ml-1 text-sm  hover:underline hover:text-blue-500 duration-200' >Iron Bar</Link><h1 className='ml-1 text-sm text-white/75 '>x5</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='w-8 h-6' src='/Lead_Bar.webp'/> <Link to='/wiki/preHardMode/leadBar'className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200' >Lead Bar</Link><h1 className='ml-1 text-sm text-white/50 '>x5</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Work_Bench.webp'/> <h1 className='text-base ml-2' >Work Bench</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         
