import { Link } from "react-router-dom"
import styles from '../../../../../css/App.module.scss'
import { PreBossesAcs } from "../../../Acs/PreBosses/PreBossesAcs"


export const MeleePreBosses = () => {
  return (
    <div className={styles.main}>
        <div className="flex ml-3">
            <div>
             <div className='flex'>
                  <h1 className='text-xl my-2'>Pre Bosses</h1>
                  <div className='bg-red-600 w-4 h-6 ml-2 mt-3'></div>
                </div>  
              <div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] '>
                  <h1 className='mb-2 font-bold' >Weapons:</h1>
                  <div className='flex'>
                    <img className='w-12 h-12' src='/Blade_of_Grass.webp'/> <Link className='h-6 mt-3' to={'/meleeWeapons/bladeofgrass'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Blade of grass</h1></Link>
                  </div>
                  <div className='flex'>
                    <img className='w-12 h-12' src='/Starfury.webp'/> <Link className='h-6 mt-3' to={'/meleeWeapons/starfury'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Starfury</h1></Link>
                  </div>
                </div>
                  <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className="font-bold">Armor:</h1>
                    <div className='flex'>
                      <img className='w-7 h-12' src='/Platinum_armor.webp' /> <Link className='h-6 mt-3' to={'/meleeArmor/platinumArmor'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Platinum armor</h1></Link>
                    </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className="font-bold" >Buffs:</h1>
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
              <PreBossesAcs/>
            </div>
          </div>
    </div>
  )
}
