import { Link } from "react-router-dom"
import styles from '../../../../../css/App.module.scss'
import { PreBossesAcs } from "../../../Acs/PreBosses/PreBossesAcs"


export const RangedPreBosses = () => {
  return (
    <div className={styles.main}>
        <div className="flex ml-3">
            <div>
             <div className='flex'>
                  <h1 className='text-xl my-2'>Pre Bosses</h1>
                  <div className='bg-[#5aceb5] w-4 h-6 ml-2 mt-3'></div>
                </div>  
              <div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] '>
                  <h1 className='mb-2 font-bold' >Weapons:</h1>
                  <div className='flex'>
                    <img className='h-5' src='/Minishark.webp'/> <Link className='h-6' to={'/ranged/Minishark'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Minishark</h1></Link>
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
                    <div className='flex mt-2'>
                      <img src='/Archery_Potion.webp' /> <Link className='h-6 mt-2' to={'/ranged/ArcheryPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Archery Potion</h1></Link>
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
