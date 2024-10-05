import { Link } from 'react-router-dom'
import styles from '../../../css/App.module.scss'


export const SummonerMain = () => {
  return (
    <div className={styles.main}>
      <h1>
      <a className="font-bold">Summoners</a> utilize Minions to deal damage for them. This makes summoners great for farming enemies or if they have to go do something. Whips are the primary weapons that will focus summons and increase their damage, as well as allowing the player to deal damage themself. Different minions are useful for different situations, as some have high accuracy while some have less, and some are grounded while others fly. Summoners have very low defense, with even Stardust armor having only 38 defense, so the overall goal of a summoner is to avoid all attacks while letting their minions and their whips deal the damage. Many people stack the effects of whips, utilizing combos such as the Durendal to gain attack speed and the Dark Harvest to deal lots of damage. Summoner armors are essential to maximizing damage output, and for people who dont wear summoner armors, summons have very little power, however some people decide to do it for the defense.
      </h1>
      <div className="flex" >
        <img className="" src='/Stardust_armor.webp'/>
        <img className=" ml-2" src='/Terraprisma.webp'/>
        <img className="h-11 ml-2" src='/Kaleidoscope.webp'/>
      </div>
      <div className='flex justify-center'>
          <h1 className='text-2xl'>Guide</h1>
          <div className='bg-[#004cc6] w-4 h-6 mt-1 ml-2'></div>
      </div>
      <div className='flex justify-between border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3 '>
        <div >
          <Link to='/sum/SumPreBosses' className='flex justify-center text-center font-bold  hover:underline hover:text-blue-500 duration-150' >Pre Bosses</Link>  
        </div>
        <div>
          <Link to='/sum/SumPreHardmode' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre HardMode</Link>
        </div>
        <div>
          <Link to='/sum/SumPreMechBosses' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Mech Bosses</Link>
        </div>
        <div>
          <Link to='/sum/SumPrePlantera' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Plantera</Link>
        </div>
        <div>
          <Link to='/sum/SumPreGolem' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Golem</Link>
        </div>
        <div>
          <Link to='/sum/SumPreLunarEvents' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Lunar Events</Link>
        </div>
        <div>
          <Link to='/sum/SumPreMoonLord' className='text-center font-bold  hover:text-blue-500 duration-150 hover:underline' >Pre Moon Lord</Link>
        </div>  
      </div>  
    </div>  
  )
}
