import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'

export const LightsBane = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Lights Bane </a>it creates a short-lived slash of darkness near the tip of the sword each time it is swung. The slashes have 5 armor penetration,[1] and will automatically target enemies within a radius of 3.125 tiles. There are two types of slashes: default small slashes, and random big slashes. Small slashes deal 50% base damage (8 base damage), while big slashes deal 100% base damage (16 base damage). The chance of big slashes occurring equals to the players melee critical strike chance.[2]

The Lights Banes Crimson counterpart is the Blood Butcherer, which is stronger and larger but also much slower, and it is one of the key ingredients in crafting the Nights Edge.

Its best modifier is Legendary.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-10 h-10' src='/Lights_Bane.webp'/> <h1 className='mt-2 ml-2 font-bold' >Lights Bane</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='' src='/Demonite_Bar.webp'/> <h1 className='ml-1 text-sm ' >Demonite Bars</h1><h1 className='ml-1 text-sm text-white/75'>x10</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Iron_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Lead_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-10 h-10' src='/Nights_Edge.webp'/> <Link to='/meleeWeapons/nightsEdge' className='mt-2 ml-2   hover:underline hover:text-blue-500 duration-200  ' >Nights Edge</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='/Lights_Bane.webp'/> <h1 to='/meleeWeapons/lightsBane' className='ml-1 text-sm   font-bold ' >Lights Bane</h1>
                  </div>
                  <div className='flex mt-1' >
                  <img className='w-10 h-10' src='/Muramasa.webp'/> <Link to='/meleeWeapons/muramasa' className='ml-1 text-sm  hover:underline hover:text-blue-500 duration-200  ' >Muramasa</Link>
                  </div>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='/Blade_of_Grass.webp'/> <Link to='/meleeWeapons/bladeofgrass' className='ml-1 text-sm  hover:underline hover:text-blue-500 duration-200 ' >Blade of Grass</Link>
                  </div>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='/Volcano.webp'/> <Link to='/meleeWeapons/volcano' className='ml-2 text-sm    hover:underline hover:text-blue-500 duration-200 ' >Volcano</Link>
                  </div>
                  
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='/Demon_Altar.webp'/> <h1 className='text-base ml-2' >Demon Altar</h1>
                  </div>
                  <div className='flex mt-3' >
                      <img className='' src='/Crimson_Altar.webp'/> <h1 className='text-base ml-2' >Crimson Altar</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         