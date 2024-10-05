import { Link } from "react-router-dom"
import styles from '../../../../css/App.module.scss'

export const CelestialShell = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Celestial Shell</a> is a Hardmode, post-Golem accessory that combines the stat-boosting powers of the Celestial Stone with the transformation powers of the Moon Shell, allowing both of their effects to happen simultaneously while taking only one accessory slot.
            <div className='ml-3'>
                <h1>+10% melee speed</h1>
                <h1>+10% damage (all types)</h1>
                <h1>+2% critical strike chance</h1>
                <h1>+1 HP/s health regeneration</h1>
                <h1>+4 defense</h1>
                <h1>+15% mining speed</h1>
                <h1>+0.5 minion knockback</h1>
                <h1>Cannot drown in water</h1>
                <h1>Can swim in water and honey</h1>
                <h1>Move at regular speed in water</h1>
            </div>
        </h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Celestial_Shell.webp'/> <h1  className=' ml-2  font-bold ' >Celestial Shell</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Celestial_Stone.webp'/> <Link to='/acs/CelestialStone' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200  ' >Celestial Stone</Link>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='/Moon_Shell.webp'/> <Link to='/acs/MoonShell' className='ml-1 hover:underline hover:text-blue-500 duration-200 ' >Moon Shell</Link>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='/Tinkerer_Workshop.webp'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


