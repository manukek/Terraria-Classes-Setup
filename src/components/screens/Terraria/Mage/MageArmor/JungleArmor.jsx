import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const JungleArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Jungle armor</a> is a pre-Hardmode armor set consisting of the Jungle Shirt, the Jungle Hat and Jungle Pants. It is crafted from items found in the Underground Jungle.
        <div>
          <h1>+17 defense</h1>
          <h1>+80 maximum mana</h1>
          <h1>+12% magic critical strike chance</h1>
          <h1>+6% magic damage</h1>
          <h1>+16% mana cost reduction</h1>
        </div>
        </h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20] text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Jungle_armor.webp'/> <h1 className='mt-2 ml-2 font-bold' >Volcano</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20] text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                  <img className='w-4 h-5' src='/Stinger.webp'/> <Link to='/wiki/items/stinger'className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Stingers</Link><h1 className='ml-1 text-sm text-white/75'>x10</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img className='w-5 h-4' src='/Jungle_Spores.webp'/> <Link to='/wiki/items/jungle_Spore'className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Jungle Spores</Link><h1 className='ml-1 text-sm  text-white/75'>x32</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img className='w-4 h-6' src='/Vine.webp'/> <Link to='/wiki/items/vine' className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Vine</Link><h1 className='ml-1 text-sm  text-white/75'>x2</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20] text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Iron_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Lead_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         