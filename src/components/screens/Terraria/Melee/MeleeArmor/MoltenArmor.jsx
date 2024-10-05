import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const MoltenArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Molten armor </a>is an armor set consisting of the Molten Helmet, Molten Breastplate, and Molten Greaves. It has the highest defense of any pre-Hardmode armor set.</h1>    
      <div>
      <div className='p-2 border border-gray-600  rounded-md bg-[#101017] mt-5 w-64'>
        <h1 className='font-bold'>The stat bonuses are:</h1>
        <div className='ml-3'>
            <h1>+25 defense</h1>
            <h1>+17% melee damage</h1>
            <h1>+7% melee speed</h1>
            <h1>+7% melee critical strike chance</h1>
            <h1>+4 defense</h1>
            <h1>+15% mining speed</h1>
            <h1>+0.5 minion knockback</h1>
        </div>
      </div> 
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-52 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='' src='/Molten_armor.webp'/> <h1 className='mt-2 ml-2 font-bold' >Molten armor</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-48 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='' src='/Hellstone_Bar.webp'/> <h1 className='ml-1 text-sm ' >Hellstone Bar</h1><h1 className='ml-1 text-sm text-white/75'>x45</h1>
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
          


         
