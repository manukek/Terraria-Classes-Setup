import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const Minishark = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Minishark</a> is a pre-Hardmode gun that can be purchased from the Arms Dealer for 35. It uses bullets as ammunition and is capable of autofiring, with each shot having a 1/3 (33.33%) chance of not consuming any ammunition. The Minishark also has the lowest use time of all pre-Hardmode ranged weapons.

Its best modifier is Agile, as it does not have any knockback and thus cannot get modifiers that affect it. On the Old-gen console version Old-gen console version and Nintendo Nintendo 3DS version version It can also get the Deadly modifier, which grants a higher increase to the overall DPS.</h1>    
      <div>
        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='' src='/Megashark.pnwebpg'/> <Link to='/ranged/Megashark' className='mt-2 ml-2   hover:underline hover:text-blue-500 duration-200  ' >Megashark</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='' src='/Minishark.webp'/> <h1 className='ml-1 text-sm font-bold' >Minishark</h1>
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
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
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
          


         