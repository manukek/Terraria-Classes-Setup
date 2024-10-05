import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const CoolWhip = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Cool Whip</a> is a Hardmode whip. Upon striking an enemy, the Cool Whip inflicts the Frostbite debuff for 4 seconds and grants the A Nice Buff buff, which creates a temporary floating snowflake projectile that chases nearby enemies for 3 seconds, dealing 15 damage and applying 20 ticks of local immunity frames upon contact. The summoned snowflake has 30 armor penetration and is not affected by damage bonuses outside of banners. If a snowflake is already summoned, attacking with the whip will reset its timer instead of creating a new one.

Like other whips, it causes minions and sentries to focus on the last-struck enemy and increases their damage against the target by 6.

If the Cool Whip hits multiple targets in a single attack, the damage dealt by each consecutive hit will be reduced by 30%.

Its best modifier is Legendary.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/c/cd/Cool_Whip.png'/> <h1 className=' ml-2 font-bold' >Cool Whip</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/e/ea/Soul_of_Light.png'/> <h1 className='ml-1 text-sm ' >Soul of Light</h1><h1 className='ml-1 text-sm text-white/75'>x8</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/e/e9/Soul_of_Night.png'/> <h1 className='ml-1 text-sm ' >Soul of Night</h1><h1 className='ml-1 text-sm text-white/75'>x8</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/2/25/Frost_Core.png'/> <h1 className='ml-1 text-sm ' >Frost Core</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                    <img className='w-8 h-5 ' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200   ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                    <img className='w-8 h-5' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvilr</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         