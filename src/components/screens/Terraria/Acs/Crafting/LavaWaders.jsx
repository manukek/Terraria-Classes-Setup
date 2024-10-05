import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'
          
export const LavaWaders = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Lava Waders </a>are an immunity accessory that allow the player to walk on the surface of all liquids, including water, honey, shimmer and even lava, without taking lava damage or triggering the On Fire! debuff (unlike the Water Walking Boots and Obsidian Water Walking Boots, which only allow walking on water, honey, and shimmer).

Lava Waders also allow the player to submerge in lava safely for 7 seconds (press the ▼ Down key to submerge), without incurring lava damage or triggering the On Fire! debuff. The 7-second countdown is signified by a lava meter that displays over the players head, similar to the Breath meter, but displaying flame icons instead of bubbles. Lava immunity time is recharged gradually by exiting lava, the same way breathing time is recharged by exiting water (albeit much more slowly).

All liquids, including lava, can be walked on indefinitely while the Lava Waders are equipped. The countdown only applies when submerged in lava, whereas the player can stand on its surface indefinitely.

Lava Waders additionally provide immunity to the Burning debuff incurred from contact with Meteorite, Hellstone or Hellstone Brick.  It also reduces lavas base damage from 80 to 35,</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-2'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                     <img  src='/Lava_Waders.webp'/> <h1  className='mt-2 ml-2 font-bold' >Lava Waders</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-44 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                  <img  src='/Lava_Charm.webp'/> <h1 className='ml-1  ' >Lava Charm</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img  src='/Obsidian_Rose.webp'/> <h1 className='ml-1 ' >Obsidian Rose</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img className='w-9 h-7' src='/Obsidian_Water_Walking_Boots.webp'/> <Link to='/acs/ObsidianWaterWalkingBoots' className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200' >Obsidian Water Walking Boots</Link>
                  </div>
              </div>
              <div className='border border-gray-300 h-44 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='/Tinkerer_Workshop.webp'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
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
                  <div className='flex mt-3'>
                    <img src='/Terraspark_Boots.webp'/> <Link to='/acs/TerrasparkBoots' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Terraspark Boots</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-44 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-2' >
                  <img src='/Frostspark_Boots.webp'/> <Link to='/acs/FrostsparkBoots' className='mt-2 ml-2 hover:underline hover:text-blue-500 duration-200' >Frostspark Boots</Link>
                  </div>
                  <div className='flex mt-2' >
                  <img src='/Lava_Waders.webp'/> <h1 className='ml-1  font-bold'>Lava Waders</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-44 ml-2' ></div>
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
          


