import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const ImpStaff = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Imp Staff</a> is a pre-Hardmode summon weapon that spawns a miniature Flying Imp minion that follows the player around and shoots fireballs at enemies. The Imps fireballs always inflict the On Fire! debuff for 3–6 seconds, and travel in a straight line, piercing up to 4 enemies. Like other minions, the summoned Imp is invincible and follows the player for an unlimited amount of time, unless the player dies, summons a replacement minion, cancels the buff, or leaves the world.

Its best modifiers are Mythical, Furious, or Godly. Rounding reveals that these modifiers provide the same increase to damage as the Ruthless modifier, increasing it from 17 to 20.

Its best modifier is Ruthless. The Mythical modifier provides the widest array of stat bonuses, but these primarily affect the initial summon rather than the resulting minion. Additionally, minions cannot deal critical hits. The only lasting advantage a Mythical Imp Staff has over a Ruthless one is knockback.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/7/72/Imp_Staff.png'/> <h1 className=' ml-2 font-bold' >Imp Staff</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/d/dc/Hellstone_Bar.png'/> <h1 className='ml-1 text-sm ' >Hellstone Bar</h1><h1 className='ml-1 text-sm text-white/75'>x17</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         