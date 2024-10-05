
import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'
import { PreGolemAcs } from '../../../Acs/PreGolem/PreGolemAcs'

export const RangedreGolem= () => {
  return (
    <div className={styles.main} >
        <div className='ml-3 '>
          <div className='flex'>
              <div>
                <div className='flex'>
                  <h1 className='text-xl my-2'>Pre-Golem</h1>
                  <div className='bg-[#5aceb5] w-4 h-6 ml-2 mt-3'></div>
                </div>  
                {/* main */}
                <div className='ml-2'>
                  <div className='border border-gray-600 rounded-lg p-3  bg-[#101017]  mt-3'>
                    <h1 className='font-bold'>Weapons:</h1>
                    <div className='flex mb-2'>
                      <img className='' src='/Megashark.webp'/> <Link className='s' to={'/ranged/Megashark'}><h1 className=' mt-2  hover:underline hover:text-blue-500 duration-200 ml-2'>Megashark</h1></Link>
                    </div>
                    <div className='flex'>
                      <img className='' src='/Daedalus_Stormbow.webp'/> <Link className='h-6 mt-2' to={'/ranged/DaedalusStormbow'}><h1 className=' mt-3 hover:underline hover:text-blue-500 duration-200 ml-2'>Daedalus Stormbow</h1></Link>
                    </div>     
                  </div>
                  <div className='border border-gray-600 rounded-lg p-3  bg-[#101017]  mt-3'>
                    <h1 className='font-bold'>Armor:</h1>
                    <div className='flex'>
                      <img src='/Shroomite_armor.webp' /> <Link className='h-6 mt-2' to={'/ranged/ShroomiteArmor'}><h1 className=' hover:underline  hover:text-blue-500 duration-200 ml-1'>Shroomite Armor</h1></Link>
                    </div>
                  </div>
                  <div className='border border-gray-600 rounded-lg p-3  bg-[#101017]  mt-3'>
                    <h1 className='font-bold'>Buffs:</h1>
                    <div className='flex mt-2'>
                      <img src='/Flask_of_Ichor.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/ichor'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Ichor</h1></Link>
                      <h1 className='mt-2 italic mx-2'>or</h1>
                      <img src='/Flask_of_Cursed_Flames.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/cursedFlames'}><h1 className=' hover:underline  hover:text-blue-500 duration-200 ml-2'>Cursed flames</h1></Link>
                    </div>
                      <div className='flex mt-2'>
                        <img src='/Sharpening_Station.webp' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className=' hover:underline hover:text-blue-500 duration-200 ml-2'>Sharpening Station</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img src='/Wrath_Potion.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-2  hover:underline hover:text-blue-500 duration-200'>Wrath Potion</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img src='/Rage_Potion.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-2  hover:underline hover:text-blue-500 duration-200'>Rage Potion</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img src='/Archery_Potion.webp' /> <Link className='h-6 mt-2' to={'/ranged/ArcheryPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Archery Potion</h1></Link>
                      </div>
                      
                  </div>
                </div>
              </div>
              {/* mixed acs */}
              <div className='mt-3'>
                <PreGolemAcs/>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] h-40 ml-3 mt-14'>
                  <h1 className='font-bold'>Ranged Accessories:</h1>
                  <div className='flex'>
                    <img className='w-7 h-7' src='/Ranger_Emblem.webp' /> <Link className='h-6' to={'/ranged/RangerEmblem'}><h1 className='   hover:underline hover:text-blue-500 duration-200 ml-2'>Ranger Emblem</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img  src='/Magic_Quiver.webp' /> <Link className='' to={'/ranged/Quivers'}><h1 className='   hover:underline hover:text-blue-500 duration-200 ml-2'>Quivers</h1></Link>
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}
