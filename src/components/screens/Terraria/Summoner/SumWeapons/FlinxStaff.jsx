import styles from '../../../../css/App.module.scss'

export const FlinxStaff = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Flinx Staff</a> is a pre-Hardmode summon weapon that summons a Flinx minion. Upon hitting an enemy, it bounces off creating a small puff of blue smoke where it immediately tries to hit the enemy again. Sometimes it will not bounce far enough away from the enemy, and will deal damage two times within just a few frames. If the player gets too far away, goes behind a wall, or flies up in the air, the Flinx will fly quickly towards the player, moving through any obstacles in the way. Like other minions, the summoned Flinx is invincible and follows the player for an unlimited amount of time, unless the player dies, summons a replacement minion, cancels the buff, or leaves the world.

Visually, the minion looks like a purple-colored Snow Flinx with a bun of fur behind its head.

Its best modifiers are Mythical, Furious, or Godly. Due to its low base damage, all damage-improving modifiers +10% or greater improve its damage by the same amount. A Ruthless Flinx Staff has no lasting advantage over one with other modifiers, as it deals less knockback.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/d/de/Flinx_Staff.png'/> <h1 className=' ml-2 font-bold' >Flinx Staff</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/8/80/Flinx_Fur.png'/> <h1 className='ml-1 text-sm ' >Flinx Fur</h1><h1 className='ml-1 text-sm text-white/75'>x6</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/4/4e/Gold_Bar.png'/> <h1 className='ml-1 text-sm ' >Gold Bar</h1><h1 className='ml-1 text-sm text-white/75'>x10</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/9/91/Work_Bench.png'/> <h1 className='text-base ml-2' >Work Bench</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         