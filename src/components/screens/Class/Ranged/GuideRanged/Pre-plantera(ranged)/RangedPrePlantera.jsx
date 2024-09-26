import { Link } from 'react-router-dom'
import styles from '../../../../../css/App.module.scss'
import { PrePlanteraAcs } from '../../../Acs/PrePlantera/PrePlanteraAcs'

export const RangedPrePlantera = () => {
  return (
    <div className={styles.main} >
        <div className='ml-3 '>
          <div className='flex'>
              <div>
              <div className='flex'>
                  <h1 className='text-xl my-2'>Pre Plantera</h1>
                  <div className='bg-[#5aceb5] w-4 h-6 ml-2 mt-3'></div>
                </div>  
                <div className='ml-2'>
                  <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className='font-bold'>Weapons:</h1>
                    <div className='flex mb-2'>
                      <img className='' src='https://terraria.wiki.gg/images/2/28/True_Night%27s_Edge.png'/> <Link className='h-6 mt-2' to={'/meleeWeapons/trueNightsEdge'}><h1 className=' mt-2  hover:underline hover:text-blue-500 duration-200 ml-2'>True Nights Edge</h1></Link>
                    </div>
                    <div className='flex'>
                      <img  src='https://terraria.wiki.gg/images/f/fa/Excalibur.png'/> <Link className='h-6 mt-2' to={'/meleeWepons/excalibur'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Excalibur</h1></Link>
                    </div>
                  </div>
                  <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className='font-bold'>Armor:</h1>
                    <div className='flex'>
                      <img src='https://terraria.wiki.gg/images/d/dd/Turtle_armor.png' /> <Link className='h-6 mt-2' to={'/meleeArmor/turtleArmor'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-1'>Turtle armor</h1></Link>
                    </div>
                  </div>
                  <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className='font-bold'>Buffs:</h1>
                    <div className='flex'>
                      <img src='https://terraria.wiki.gg/images/f/f6/Sake.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/sake'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Sake</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='https://terraria.wiki.gg/images/7/71/Flask_of_Ichor.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/ichor'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Ichor</h1></Link>
                      <h1 className='mt-2 italic mx-2'>or</h1>
                      <img src='https://terraria.wiki.gg/images/0/08/Flask_of_Cursed_Flames.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/cursedFlames'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Cursed flames</h1></Link>
                    </div>
                      <div className='flex mt-2'>
                        <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className=' hover:underline hover:text-blue-500 duration-200 ml-2'>Sharpening Station</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-2  hover:underline hover:text-blue-500 duration-200'>Wrath Potion</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-2  hover:underline hover:text-blue-500 duration-200'>Rage Potion</h1></Link>
                      </div>
                      
                  </div>
                </div>
              </div>
              
              <div className='ml-3 mt-11'>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3 '>
                    <h1 className='font-bold'>Melee Accessories:</h1>
                    <div className='p-2' > 
                      <div className='flex '>
                        <img className='w-7 h-7' src='https://terraria.wiki.gg/images/d/d7/Warrior_Emblem.png' /> <Link className='h-6' to={'/meleeAcs/warriorEmblem'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Warrior Emblem</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/0/05/Berserker%27s_Glove.png' /> <Link className='h-6 mt-2' to={'/meleeAcs/berserkerGlove'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Berserker glove</h1></Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/8/8a/Fire_Gauntlet.png' /> <Link className='h-6 mt-2' to={'/meleeAcs/fireGauntlet'}><h1 className='  hover:underline hover:text-blue-500 duration-200 ml-2'>Fire Gauntlet</h1></Link>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='mt-3'>
                <PrePlanteraAcs/>
              </div>
            </div>
          </div>
    </div>
  )
}
