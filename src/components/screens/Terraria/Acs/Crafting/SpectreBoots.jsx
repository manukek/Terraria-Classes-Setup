import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'


export const SpectreBoots = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Lightning Boots</a> are an accessory that have essentially the same functionality as Spectre Boots, but with enhanced running speed. Its visual effects do not differ from the Spectre Boots. They have an 8% movement speed bonus compared to the Spectre Boots.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                  <img  src='https://terraria.wiki.gg/images/2/28/Spectre_Boots.png'/> <h1  className='mt-2 ml-2 font-bold' >Spectre Boots</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                  <img  src='https://terraria.wiki.gg/images/2/29/Hermes_Boots.png'/> <Link to='/acs/HermesBoots' className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200' >Hermes Boots</Link>
                  </div>
                  <div className='flex mt-3' >
                  <img  src='https://terraria.wiki.gg/images/2/2b/Rocket_Boots.png'/> <Link to='/acs/RocketBoots' className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200' >Rocket Boots</Link>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
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
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                  <img src='https://terraria.wiki.gg/images/2/2c/Lightning_Boots.png'/> <Link to='/acs/LightningBoots' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Lightning Boots</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-2' >
                  <img src='https://terraria.wiki.gg/images/2/28/Spectre_Boots.png'/> <h1 className='ml-1 text-sm font-bold' >Spectre Boots</h1>
                  </div>
                  <div className='flex mt-2' >
                  <img src='https://terraria.wiki.gg/images/f/f4/Anklet_of_the_Wind.png'/> <h1 className='ml-1 text-sm' >Anklet of the Wind</h1>
                  </div>
                  <div className='flex mt-2' >
                  <img className='w-5 h-2' src='https://terraria.wiki.gg/images/6/6d/Aglet.png'/> <h1 className='ml-2 text-sm' >Aglet</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
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
          

