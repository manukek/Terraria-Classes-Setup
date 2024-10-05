import { Link } from "react-router-dom"
import styles from '../../../../css/App.module.scss'

export const MoonShell = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Moon Shell</a> is a Hardmode accessory that can be crafted at the Tinkerers Workshop. It combines the effects of the Moon Charm and the Neptunes Shell: Equipping it will turn the player into a Merfolk when entering water or honey (at any time), or into a Werewolf at night. The Merfolk form replaces the Werewolf form if entering water at night.
            <div className='ml-3'>
                <h1>+2% melee critical strike chance</h1>
                <h1>+5.1% melee damage</h1>
                <h1>+5.1% melee speed</h1>
                <h1>+5% movement speed</h1>
                <h1>+3 defense</h1>
                <h1>Slightly increased jump height and jump speed</h1>
                <h1>+0.5 HP regeneration per second (similar to the Band of Regeneration, but with half the speed)</h1>
            </div>
        </h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Moon_Shell.webp'/> <h1  className=' ml-2  font-bold ' >Moon Shell</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Moon_Charm.webp'/> <h1 to='/acs/CelestialStone' className=' ml-2' >Moon Charm.</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='/Neptune_Shell.webp'/> <h1 to='/acs/MoonShell' className='ml-1' >Neptunes Shell</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='/Tinkerer_Workshop.webp'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>

        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Celestial_Shell.webp'/> <Link to='/acs/CelestialShell' className=' ml-2 hover:underline hover:text-blue-500 duration-200  ' >Celestial Shell</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-2' >
                     <img className='' src='/Celestial_Stone.webp'/> <Link to='/acs/CelestialStone' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200  ' >Celestial Stone</Link>
                  </div>
                  <div className='flex mt-2' >
                    <img className='' src='/Moon_Shell.webp'/> <h1 to='/acs/MoonShell' className='ml-1 font-bold ' >Moon Shell</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]   text-center rounded-md mb-1'>Crafting station</h1> 
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
          


