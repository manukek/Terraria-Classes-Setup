import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'


export const MoonStone = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold'>The Moon Stone</a> is a Hardmode accessory which has a <a className='font-bold underline  '>1/35 (2.86%) / 69/1225 (5.63%) chance to drop from Vampires during the Solar Eclipse event.</a> It grants the same stat bonuses as the Sun Stone, but these bonuses will only activate during the night or during a Solar Eclipse.
            <h1>+10% melee speed</h1>
            <h1>+10% damage (all types)</h1>
            <h1>+2% critical strike chance</h1>
            <h1>+1 HP/s health regeneration</h1>
            <h1>+4 defense</h1>
            <h1>+15% mining speed</h1>
            <h1>+0.5 minion knockback</h1>
        </h1>    
      <div>

      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Obtained from</h1>
      <div className='border border-gray-600 rounded-md p-2 w-3/6 bg-[#101017]' >
        <div>
          <div className='mt-2 flex'>
            <img src='/Vampire.webp'/> <h1 className='mt-2 mx-2'>Vampire</h1> <h1 className='mt-2 text-white/75'>1%</h1>
          </div>
        </div>
      </div>

        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                     <img className='' src='/Celestial_Stone.webp'/> <Link to='/acs/CelestialStone' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200  ' >Celestial Stone</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-2' >
                    <img className='' src='/Sun_Stone.webp'/> <h1 className='ml-1 text-sm ' >Sun Stone</h1>
                  </div>
                  <div className='flex mt-2' >
                    <img className='' src='/Moon_Stone.webp'/> <h1 className='ml-1 text-sm font-bold' >Moon Stone</h1>
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
          


