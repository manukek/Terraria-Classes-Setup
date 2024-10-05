import styles from '../../../../css/App.module.scss'

export const ShadowflameKnife = () => {
  return (
    <div className={styles.main}>
      <div>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' >The Shadowflame Knife is a Hardmode melee weapon that auto-fires small flaming knife projectiles that consume no mana or ammunition. The projectiles ricochet twice off enemies only (not blocks), dissipating upon their third impact. They also inflict the Shadowflame debuff for between 1 and 3 seconds, which deals an additional 15 damage per second. The Shadowflame Knife also has a base 7% critical strike chance as opposed to the usual 4%.</h1>
      </div>
       <div className='mt-2 p-2 border border-gray-600 rounded-md bg-[#101017] w-72'>
          <h1 className='font-bold'>Obtained from</h1>
          <div className='flex'>
            <img src='/Goblin_Warlock.webp'/><h1 className='mt-2 mx-2'>Goblin Warlock</h1><h1 className='mt-2 text-white/75'>16.7%</h1>
          </div>
       </div>
    </div>
  )
}

         