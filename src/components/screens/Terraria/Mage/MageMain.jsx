import { Link } from 'react-router-dom'
import styles from '../../../css/App.module.scss'


export const MageMain = () => {
  return (
    <div className={styles.main}>
      <h1>
      <a className="font-bold animate-fade-in">Magicians</a> are fragile but highly varied in attack style, often utilizing special mechanics such as homing, lifesteal, and area-of-effect damage. They are held back by reliance on mana, which regenerates very slowly unless the Mana Regeneration buff is in effect. Mana becomes less of a problem as the player progresses, as they obtain helpful Armors and Accessories such as the Mana Flower. Enemies also have a high chance to drop mana when killed by a player with less than full Mana, which proves useful in situations with lots of enemies where theyll end up using lots of mana. Magic-users must craft or purchase mana potions if they wish to recover mana instantly.
      </h1>
      <div className="flex" >
        <img className="" src='/Nebula_armor.webp'/>
        <img className="h-8 ml-2" src='/Last_Prism.webp'/>
      </div>
      <div className='flex justify-center'>
          <h1 className='text-2xl'>Guide</h1>
          <div className='bg-[#d30ca1] w-4 h-6 mt-1 ml-2'></div>
      </div>
      <div className='flex justify-between border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3 '>
        <div >
          <Link to='/mage/MagePreBosses' className='flex justify-center text-center font-bold  hover:underline hover:text-blue-500 duration-150' >Pre Bosses</Link>  
        </div>
        <div>
          <Link to='/mage/MagePreHardmode' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre HardMode</Link>
        </div>
        <div>
          <Link to='/mage/MagePreMechBosses' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Mech Bosses</Link>
        </div>
        <div>
          <Link to='/mage/MagePrePlantera' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Plantera</Link>
        </div>
        <div>
          <Link to='/mage/MagePreGolem' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Golem</Link>
        </div>
        <div>
          <Link to='/mage/MagePreLunarEvents' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Lunar Events</Link>
        </div>
        <div>
          <Link to='/mage/MagePreMoonLord' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Moon Lord</Link>
        </div>  
      </div>  
    </div>  
  )
}
