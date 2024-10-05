import styles from '../../../../css/App.module.scss'

export const MorningStar = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Morning Star </a> is a Hardmode, post-Plantera whip. Like other whips, it causes minions and sentries to focus on the last-struck enemy and increases their damage against the target by 8. Uniquely, it also grants minions and sentries the ability to deal critical hits at a fixed 12% chance.

If the Morning Star hits multiple targets in a single attack, the damage dealt by each consecutive hit will be reduced by 5%. The Morning Star has a 1/200 (0.5%) / 399/40000 (1%) chance of being dropped by Blue Armored Bones, Rusty Armored Bones, and Hell Armored Bones in the post-Plantera Dungeon.

Its best modifier is Legendary.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Obtained from</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
            <div className='flex'>
                <img src='https://terraria.wiki.gg/images/f/f1/Blue_Armored_Bones.gif' className=''/><h1 className='mt-3 ml-2'> Blue Armored Bones</h1><h1 className='mt-3 ml-2'> 0.5%</h1>
            </div>
            <div className='flex'>
                <img src='https://terraria.wiki.gg/images/4/40/Hell_Armored_Bones.gif' className=''/><h1 className='mt-3 ml-2'> Hell Armored Bones</h1><h1 className='mt-3 ml-2'> 0.5%</h1>
            </div>
            <div className='flex'>
                <img src='https://terraria.wiki.gg/images/0/03/Rusty_Armored_Bones.gif' className=''/><h1 className='mt-3 ml-2'> Rusty Armored Bones</h1><h1 className='mt-3 ml-2'> 0.5%</h1>
            </div>
        </div>  
      </div>
    </div>
  )
}
          


         