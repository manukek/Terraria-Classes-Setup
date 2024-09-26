import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'
          
export const Magiluminescence = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Magiluminescence</a> is a pre-Hardmode accessory that increases the players maximum movement speed by 15% and their acceleration and deceleration by 75%. This increase stacks with the bonus of the Hermes Boots and their variants.[1] It also creates an aura of light around the player, which can be useful when exploring underground. The Magiluminescences movement speed buffs are disabled when the player is not grounded.[2]</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                  <img src='https://terraria.wiki.gg/images/f/f2/Magiluminescence.png'/> <h1 className='ml-2 font-bold' >Magiluminescence</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                  <img src='https://terraria.wiki.gg/images/6/67/Demonite_Bar.png'/> <h1 className='ml-1 text-sm' >Demonite Bar</h1><h1 className='ml-1 text-sm text-white/75'>x12</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img src='https://terraria.wiki.gg/images/a/a5/Topaz.png'/> <h1 to='/wiki/items/jungle_Spore'className='ml-2 text-sm ' >Topaz</h1><h1 className='ml-1 text-sm  text-white/75'>x5</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2 hover:underline hover:text-blue-500 duration-200' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4'  src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2 hover:underline hover:text-blue-500 duration-200' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


