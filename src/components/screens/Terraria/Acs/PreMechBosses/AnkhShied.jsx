import styles from '../../../../css/App.module.scss'

export const AnkhShied = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Ankh Shield</a> is a Hardmode shield and immunity accessory which provides immunity to  12 /  10 different debuffs, knockback immunity, and an additional 4 defense. It is crafted from an Obsidian Shield and an Ankh Charm at the Tinkerers Workshop.

When equipped, the Ankh Shield provides immunity to all of the following debuffs: <a className='font-bold underline'>Bleeding, Confused, Stoned, Slow, Broken Armor, Cursed, Poisoned, Weak, Burning, Darkness, Silenced, Chilled.</a></h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img src='https://terraria.wiki.gg/images/9/99/Ankh_Shield.png'/> <h1 to='/meleeWeapons/nightsEdge' className='mt-2 ml-2 font-bold' >Ankh Shield</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                  <img src='https://terraria.wiki.gg/images/7/7a/Obsidian_Shield.png'/> <h1 to='/acs/FrostsparkBoots' className='mt-2 ml-2 ' >Obsidian Shield</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img src='https://terraria.wiki.gg/images/d/d5/Ankh_Charm.png'/> <h1 to='/acs/LavaWaders' className='ml-1  '>Ankh Charm</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


