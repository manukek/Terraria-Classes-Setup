import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const Megashark = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Megashark </a> is a Hardmode gun that fires bullets. It is a stronger version of the Minishark and is one of the strongest pre-Plantera guns in the game. It has one of the lowest use times of all weapons at 7 and has a 50% chance not to consume ammo.

Its best modifier is Unreal.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
      <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='' src='/Megashark.webp'/> <h1 className='mt-2 ml-2 font-bold' >Megashark</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='' src='/Minishark.webp'/> <Link to='/ranged/MiniShark' className='ml-1 text-sm hover:underline hover:text-blue-500 duration-200' >Minishark</Link>
                  </div>
                  <div className='flex mt-2' >
                    <img className='' src='/Illegal_Gun_Parts.webp'/> <h1  className='ml-1 text-sm' >Illegal Gun Parts</h1>
                  </div>
                  <div className='flex mt-2' >
                    <img className='' src='/Shark_Fin.webp'/> <h1 className='ml-1 text-sm' >Shark Fin</h1><h1 className='ml-1 text-sm text-white/75'>x5</h1>
                  </div>
                  <div className='flex mt-2' >
                    <img className='' src='/Soul_of_Might.webp'/> <h1 className='ml-2 text-sm' >Soul of Might</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
                  
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
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
          


         