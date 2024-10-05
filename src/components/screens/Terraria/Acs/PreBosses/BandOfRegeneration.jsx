import styles from '../../../../css/App.module.scss'

export const BandOfRegeneration = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold'>The Band of Regeneration</a> is an accessory <a className='underline'>that can be found in Gold Chests in the Underground and Cavern biomes and in Living Mahogany Trees in the Underground Jungle.</a> When equipped, it regenerates  1 /  0.5 health every second. This effect stacks with the players natural health regeneration, but unlike the natural regeneration, does not slow or stop when the player is moving or being attacked.</h1>    
    </div>
  )
}
          
