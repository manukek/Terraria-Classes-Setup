
import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'
                
export const ObsidianWaterWalkingBoots = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Obsidian Water Walking Boots </a>are an immunity accessory which combines the abilities of the Water Walking Boots and the Obsidian Skull. They allow the wearer to walk on water, honey, and shimmer, while also giving immunity to the Burning debuff. They do not allow walking on lava.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-2'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                  <img className='w-9 h-7' src='https://terraria.wiki.gg/images/5/51/Obsidian_Water_Walking_Boots.png'/> <h1 className='ml-1 text-sm font-bold' >Obsidian Water Walking Boots</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-44 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img  src='https://terraria.wiki.gg/images/c/cf/Water_Walking_Boots.png'/> <h1 className='ml-1 text-sm' >Water Walking Boots</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img  src='https://terraria.wiki.gg/images/4/4e/Obsidian_Skull.png'/> <h1 className='ml-1 text-sm ' >Obsidian Skull</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-44 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>

        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img src='https://terraria.wiki.gg/images/1/1a/Lava_Waders.png'/> <Link to='/acs/LavaWaders' className='ml-1 hover:underline hover:text-blue-500 duration-200'>Lava Waders</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-2' >
                    <img className='w-9 h-7' src='https://terraria.wiki.gg/images/5/51/Obsidian_Water_Walking_Boots.png'/> <h1 to='/acs/HermesBoots' className='ml-1 text-sm font-bold' >Obsidian Water Walking Boots</h1>
                  </div>
                  <div className='flex mt-2' >
                    <img  src='https://terraria.wiki.gg/images/9/9b/Lava_Charm.png'/> <h1 className='ml-1 text-sm ' >Lava Charm</h1>
                  </div>
                  <div className='flex mt-2' >
                  <img  src='https://terraria.wiki.gg/images/5/54/Obsidian_Rose.png'/> <h1 className='ml-1 text-sm' >Obsidian Rose</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-44 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


