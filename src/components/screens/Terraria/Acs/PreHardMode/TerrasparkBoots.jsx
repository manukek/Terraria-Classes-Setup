
import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TerrasparkBoots = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Terraspark Boots </a>are a pre-Hardmode accessory crafted by combining Frostspark Boots and Lava Waders at a Tinkerers Workshop, providing the benefits of both items. They are the final upgrade of the Hermes/Sailfish/Flurry/Dunerider and Water Walking Boots.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                   <img src='/Terraspark_Boots.webp'/> <h1 to='/meleeWeapons/nightsEdge' className='mt-2 ml-2 font-bold' >Terraspark Boots</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                  <img src='/Frostspark_Boots.webp'/> <Link to='/acs/FrostsparkBoots' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200 ' >Frostspark Boots</Link>
                  </div>
                  <div className='flex mt-3' >
                  <img src='/Lava_Waders.webp'/> <Link to='/acs/LavaWaders' className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200'>Lava Waders</Link>
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
          


