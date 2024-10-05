import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'
import { PreMechBossesAcs } from '../../../Acs/PreMechBosses/PreMechBossesAcs'

export const RangedPreMechBosses = () => {
  return (
    <div className={styles.main} >
        <div className='ml-3 '>  
            <div className='flex'>
                  <h1 className='text-xl my-2'>Pre-Mech Bosses</h1>
                  <div className='bg-[#5aceb5] w-4 h-6 ml-2 mt-3'></div>
            </div>  
            <div className='flex'>
              <div className='ml-2'>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Weapons:</h1>
                  <div className='flex'>
                    <img className='w-12 h-12' src='https://terraria.wiki.gg/images/e/ea/Ice_Sickle.png'/> <Link className='h-6 mt-2' to={'/meleeWeapons/iceSickle'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Ice Sickle </h1></Link>
                  </div>
                  <div className='flex'>
                    <img  src='https://terraria.wiki.gg/images/d/d2/Shadowflame_Knife.png'/> <Link className='h-6 mt-2' to={'/meleeWeapons/shadowflameKnife'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Shadowflame Knife </h1></Link>
                  </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Armor:</h1>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/2/24/Titanium_armor_%28old%29.png' /> <Link className='h-6 mt-2' to={'/meleeArmor/titanumArmor'}><h1 className='   hover:underline hover:text-blue-500  ml-1'>Titanium armor</h1></Link>
                  </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Buffs:</h1>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/f/f6/Sake.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/sake'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Sake</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/7/71/Flask_of_Ichor.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/ichor'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Ichor</h1></Link>
                    <h1 className='mt-2 italic mx-2'>or</h1>
                    <img src='https://terraria.wiki.gg/images/0/08/Flask_of_Cursed_Flames.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/cursedFlames'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Cursed flames</h1></Link>
                  </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='  hover:underline hover:text-blue-500  ml-2'>Sharpening Station</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-2   hover:underline hover:text-blue-500 '>Wrath Potion</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-2   hover:underline hover:text-blue-500 '>Rage Potion</h1></Link>
                    </div>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3'>
                  <h1 className='font-bold'>Melee Accessories:</h1>
                  <div className='flex'>
                    <img className='w-7 h-7' src='https://terraria.wiki.gg/images/d/d7/Warrior_Emblem.png' /> <Link className='h-6' to={'/meleeAcs/warriorEmblem'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Warrior Emblem</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img  src='https://terraria.wiki.gg/images/0/05/Berserker%27s_Glove.png' /> <Link className='h-6 mt-2' to={'/meleeAcs/berserkerGlove'}><h1 className='   hover:underline hover:text-blue-500  ml-2'>Berserker glove</h1></Link>
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
