import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'
import { PreMechBossesAcs } from '../../../Acs/PreMechBosses/PreMechBossesAcs'

export const MeleePreMechBosses = () => {
  return (
    <div className={styles.main} >
        <div className='ml-3 '>  
            <div className='flex'>
                  <h1 className='text-xl my-2'>Pre-Mech Bosses</h1>
                  <div className='bg-red-600 w-4 h-6 ml-2 mt-3'></div>
            </div>  
            <div className='flex'>
              <div className='ml-2'>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Weapons:</h1>
                  <div className='flex'>
                    <img className='w-12 h-12' src='/Ice_Sickle.webp'/> <Link className='h-6 mt-2' to={'/meleeWeapons/iceSickle'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Ice Sickle </h1></Link>
                  </div>
                  <div className='flex'>
                    <img  src='/Shadowflame_Knife.webp'/> <Link className='h-6 mt-2' to={'/meleeWeapons/shadowflameKnife'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Shadowflame Knife </h1></Link>
                  </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Armor:</h1>
                  <div className='flex'>
                    <img src='/Titanium_armor_%28old%29.webp' /> <Link className='h-6 mt-2' to={'/meleeArmor/titanumArmor'}><h1 className='   hover:underline hover:text-blue-500  ml-1'>Titanium armor</h1></Link>
                  </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Buffs:</h1>
                  <div className='flex'>
                    <img src='/Sake.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/sake'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Sake</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='/Flask_of_Ichor.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/ichor'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Ichor</h1></Link>
                    <h1 className='mt-2 italic mx-2'>or</h1>
                    <img src='/Flask_of_Cursed_Flames.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/cursedFlames'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Cursed flames</h1></Link>
                  </div>
                    <div className='flex mt-2'>
                      <img src='/Sharpening_Station.webp' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='  hover:underline hover:text-blue-500  ml-2'>Sharpening Station</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='/Wrath_Potion.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-2   hover:underline hover:text-blue-500 '>Wrath Potion</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='/Rage_Potion.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-2   hover:underline hover:text-blue-500 '>Rage Potion</h1></Link>
                    </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Melee Accessories:</h1>
                  <div className='flex'>
                    <img className='w-7 h-7' src='/Warrior_Emblem.webp' /> <Link className='h-6' to={'/meleeAcs/warriorEmblem'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Warrior Emblem</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img  src='/Berserkers_Glove.webp' /> <Link className='h-6 mt-2' to={'/meleeAcs/berserkerGlove'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Berserker glove</h1></Link>
                  </div>
                </div>
              </div>
              <div>
                <PreMechBossesAcs/>
              </div>
              </div>
          </div>  
          
    </div>
  )
}
