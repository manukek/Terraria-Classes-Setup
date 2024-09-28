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
                    <img className='h-5' src='https://terraria.wiki.gg/images/9/96/Minishark.png'/> <Link className='h-6' to={'/ranged/Minishark'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Minishark</h1></Link>
                  </div>
                </div>
                  <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className="font-bold">Armor:</h1>
                    <div className='flex'>
                      <img className='w-7 h-12' src='https://terraria.wiki.gg/images/9/94/Platinum_armor.png' /> <Link className='h-6 mt-3' to={'/meleeArmor/platinumArmor'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Platinum armor</h1></Link>
                    </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className="font-bold" >Buffs:</h1>
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
              <PreBossesAcs/>
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
                                  <img src='https://terraria.wiki.gg/images/2/25/Jester%27s_Arrow.png'/> <h1 className='flex ml-1' >Jesters Arrow</h1>
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
