
import { Link } from 'react-router-dom'
import styles from '../../../../../../css/App.module.scss'

export const IronBar = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Iron Bar</a> is an early-game metal bar, used to create the Iron tier of equipment, along with many other items. It can also be placed on the ground, like furniture. Its alternate ore counterpart is the Lead Bar.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='w-8 h-6' src='/Iron_Bar.webp'/> <h1 className=' ml-2 text-bold font-bold' >Iron Bar</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='w-4 h-4' src='/Iron_Ore.webp'/> <h1 className='ml-1 text-sm' >Iron Ore</h1><h1 className='ml-1 text-sm text-white/50 '>x3</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                    <img className='' src='/Furnace.webp'/> <h1 to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2'>Furnace</h1>
                  </div>
              </div>
          </div>
        </div>

        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-52 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-8 h-4' src='/Iron_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='ml-2 hover:underline hover:text-blue-500 duration-200 ' >Iron Anvil</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-48 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='' src='/Iron_Bar.webp'/> <h1 className='ml-1 text-sm' >Iron bar</h1><h1 className='ml-1 text-sm text-white/50' >x5</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-48 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-5' src='/Work_Bench.webp'/> <h1 className=' ml-2' >Work Bench</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


             





