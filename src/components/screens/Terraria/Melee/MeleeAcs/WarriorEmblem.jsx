import styles from '../../../../css/App.module.scss'

export const WarriorEmblem = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Warrior Emblem</a> is a Hardmode accessory that increases melee damage by 15%. It has a 1/4 (25%) chance to drop from the Wall of Flesh.</h1>    
        <div className='p-2 border border-gray-600  rounded-md bg-[#101017] mt-4'>
        <h1 className='font-bold '>The stat bonuses are:</h1>
        <div className='ml-3'>
            <h1>+15% increased melee damage</h1>
        </div>
      </div>
    </div>
  )
}
          



