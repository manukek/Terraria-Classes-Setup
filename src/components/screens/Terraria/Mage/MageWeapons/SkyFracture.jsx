import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const SkyFracture = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Sky Fracture</a> is an early Hardmode magic weapon. When used, three energy swords will be summoned in quick succession from behind the player, aiming at the cursors location. Each projectile can hit one enemy or block before it disappears. Unlike the Magic Missile from which it is crafted, the energy blades cannot be controlled. The Sky Fracture has a base 24% critical strike chance as opposed to the usual 4%.

Its best modifier is Mythical.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Sky_Fracture.webp'/> <h1 className='mt-2 ml-2 font-bold' >Sky Fracture</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Magic_Missile.webp'/> <h1 className='ml-1 text-sm ' >Magic Missile</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='/Light_Shard.webp'/> <h1 className='ml-1 text-sm ' >Light Shard</h1><h1 className='ml-1 text-sm text-white/75'>x2</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='/Soul_of_Light.webp'/> <h1 className='ml-1 text-sm ' >Soul of Light</h1><h1 className='ml-1 text-sm text-white/75'>x16</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                    <img className='w-8 h-5 ' src='/Mythril_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200   ' >Mythril Anvil</Link>
                </div>
                <div className='flex' >
                    <img className='w-8 h-5' src='/Orichalcum_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvilr</Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         