import { Link } from "react-router-dom"
import styles from '../../../../../css/App.module.scss'
import { PreHardModeAcs } from "../../../Acs/PreHardMode/PreHardModeAcs"


export const RangedPreHardMode = () => {
  return (
    <div className={styles.main}>
        <div className='ml-3 flex'>
          <div>
          <div className='flex'>
                  <h1 className='text-xl my-2'>Pre Hard Mode</h1>
                  <div className='bg-[#5aceb5] w-4 h-6 ml-2 mt-3'></div>
                </div>  
            <div className='ml-2 w-72'>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] '> 
                <h1 className="font-bold">Weapons:</h1>
                  <div className='flex'>
                    <img className='h-5' src='https://terraria.wiki.gg/images/9/96/Minishark.png'/> <Link className='h-6' to={'/ranged/Minishark'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Minishark</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img className='' src='https://terraria.wiki.gg/images/2/21/The_Bee%27s_Knees.png'/> <Link className='h-6' to={'/ranged/TheBeesKnees'}><h1 className='ml-1 mt-3 hover:underline hover:text-blue-500 duration-200'>The Bees Knees</h1></Link>
                  </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] mt-3'>
                <h1 className="font-bold">Armor:</h1>
                <div className='flex'>
                  <img className='w-7 h-12' src='https://terraria.wiki.gg/images/d/d3/Necro_armor.png' /> <Link className='h-6 mt-2' to={'/ranged/NecroArmor'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Necro Armor</h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] mt-3'>
                  <h1 className="font-bold">Buffs:</h1>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Sharpening Station</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Wrath Potion</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Rage Potion</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/9/9f/Archery_Potion.png' /> <Link className='h-6 mt-2' to={'/ranged/ArcheryPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Archery Potion</h1></Link>
                    </div>
              </div>
            </div>
            </div>
            <div className="mt-3">
              <PreHardModeAcs/>
            </div>
            <div className="mt-3">
              <div>
                  <div className='ml-3 mt-8'>
                          <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3 '>
                              <h1 className="font-bold" >Ammunition:</h1>
                              <div className='p-2' > 
                                <div className='flex '>
                                  <img className='h-3 mt-1' src='https://terraria.wiki.gg/images/0/0f/Silver_Bullet.png'/> <h1  className='ml-1 ' >Silver Bullet</h1>
                                </div>
                                <div className='flex mt-2'>
                                  <img src='https://terraria.wiki.gg/images/9/94/Hellfire_Arrow.png'/> <h1 className='flex ml-1'>Hellfire Arrow</h1>
                                </div>                                
                              </div>
                          </div>
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}
