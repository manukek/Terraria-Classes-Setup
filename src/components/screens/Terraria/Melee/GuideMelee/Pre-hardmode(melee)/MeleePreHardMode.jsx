import { Link } from "react-router-dom"
import styles from '../../../../../css/App.module.scss'
import { PreHardModeAcs } from "../../../Acs/PreHardMode/PreHardModeAcs"


export const MeleePreHardMode = () => {
  return (
    <div className={styles.main}>
        <div className='ml-3 flex'>
          <div>
          <div className='flex'>
                  <h1 className='text-xl my-2'>Pre Hard Mode</h1>
                  <div className='bg-red-600 w-4 h-6 ml-2 mt-3'></div>
                </div>  
            <div className='ml-2 w-72'>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] '> 
                <h1 className="font-bold">Weapons:</h1>
                <div className='flex'>
                  <img className='w-12 h-12' src='/Nights_Edge.webp'/> <Link className='h-6 mt-2' to={'/meleeWeapons/nightsEdge'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Nights Edge </h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] mt-3'>
                <h1 className="font-bold">Armor:</h1>
                <div className='flex'>
                  <img className='w-7 h-12' src='/Molten_armor.webp' /> <Link className='h-6 mt-2' to={'/meleeArmor/moltenArmor'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Molten armor</h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] mt-3'>
                  <h1 className="font-bold">Buffs:</h1>
                  <div className='flex'>
                    <img src='/Sharpening_Station.webp' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Sharpening Station</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='/Wrath_Potion.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Wrath Potion</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='/Rage_Potion.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Rage Potion</h1></Link>
                  </div>
              </div>
            </div>
            </div>
            <div className="mt-3">
              <PreHardModeAcs/>
            </div>
          </div>
    </div>
  )
}
