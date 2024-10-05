import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'

export const HardModeAnvils = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Mythril Anvil</a> and <a className='font-bold'>Orichalcum Anvil</a> are Hardmode crafting stations that serve and extend the function of a pre-Hardmode Anvil. These are very crucial to game advancement, as they account for making nearly every Hardmode recipe before the Ancient Manipulator. In addition to acting as a direct replacement to Lead and Iron Anvils and inheriting all of their crafting recipes, they further serve the similar function of crafting bars forged of Hardmode ores into weapons, armor and tools, as well as several other items, such as wings.</h1>
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='w-8 h-5' src='/Mythril_Anvil.webp'/> <h1 className=' ml-2' >Mythril Anvil</h1>
                  </div>
                  <div className='flex mt-3'>
                    <img className='w-8 h-5' src='/Orichalcum_Anvil.webp'/> <h1 className=' ml-2' >Orichalcum Anvil</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                     <img className='w-8 h-6' src='/Mythril_Bar.webp'/> <h1 className='ml-1 text-sm' >Mythril Bar </h1><h1 className='ml-1 text-sm text-white/50 '>x10</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='w-8 h-6' src='/Orichalcum_Bar.webp'/> <h1 className='ml-1 text-sm' >Orichalcum Bar </h1><h1 className='ml-1 text-sm text-white/50 '>x12</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Iron_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Lead_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         
