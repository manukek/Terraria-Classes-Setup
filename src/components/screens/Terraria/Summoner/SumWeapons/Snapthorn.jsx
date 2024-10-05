import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const Snapthorn = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Volcano</a> is a pre-Hardmode sword crafted from Hellstone Bars. It lacks autoswing and has a slow swing speed, but it has the second-longest reach and second-highest damage of all swords in pre-Hardmode.

The Volcano creates an explosion upon hitting an enemy, dealing 75% base damage (30 base damage) to the enemy and all targets in an area around the enemy,[1] and has a 1/2 (50%) chance of inflicting the On Fire! debuff for 3 seconds.[2] Each explosion creates a tall plume of fire and smoke particles.

The Volcano is one of the key ingredients in crafting the Nights Edge.

Its best modifier is Legendary.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/a/a0/Snapthorn.png'/> <h1 className=' ml-2 font-bold' >Snapthorn</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='w-4 h-5' src='https://terraria.wiki.gg/images/b/b6/Stinger.png'/> <Link to='/wiki/items/stinger'className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Stingers</Link><h1 className='ml-1 text-sm text-white/75'>x15</h1>
                  </div>
                  <div className='flex mt-3' >
                     <img className='w-5 h-4' src='https://terraria.wiki.gg/images/6/61/Jungle_Spores.png'/> <Link to='/wiki/items/jungle_Spore'className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Jungle Spores</Link><h1 className='ml-1 text-sm  text-white/75'>x12</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='w-4 h-6' src='https://terraria.wiki.gg/images/f/ff/Vine.png'/> <Link to='/wiki/items/vine' className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Vine</Link><h1 className='ml-1 text-sm  text-white/75'>x3</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         