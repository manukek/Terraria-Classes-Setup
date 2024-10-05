import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const PlatinumArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600 rounded-md bg-[#101017]' ><a className='font-bold  '>Platinum armor</a>. is a pre-Hardmode armor set. It consists of the Platinum Helmet, Platinum Chainmail, and Platinum Greaves. It takes a total of  75 /  90 Platinum Bars ( 300 /  360 Platinum Ores) to craft a full set.

Its same-tier counterpart is the Gold armor.</h1>    
      <div>
        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-52 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='' src='/Platinum_armor.webp'/> <h1 className='mt-2 ml-2' >Platinum Armor</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-48 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='' src='/Platinum_Bar.webp'/> <h1 className='ml-1 text-sm' >Platinum Bar x75</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-48 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Iron_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200 ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Lead_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200 ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         
