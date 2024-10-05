import styles from '../../../../css/App.module.scss'

export const SolarEruption = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Solar Eruption</a> is a Hardmode, post-Lunatic Cultist melee weapon which autofires a long whipsword from the players position that quickly retracts. The Solar Eruptions tip follows a narrow arc in the general direction of the cursor and pierces an unlimited number of enemies before retracting. The spiked shaft can pass through blocks and generates a Solar Explosion upon damaging an enemy. This explosion then inflicts the Daybroken debuff to damaged enemies as well as other enemies within their vicinity, which deals ticks of 25 damage per quarter-second for a duration of 5 seconds.

Its best modifier is Godly or Demonic. Both modifiers increase the average damage output by the same amount.</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
<div className='flex'>
              <div className=' p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/1/10/Solar_Eruption.png'/> <h1 className='mt-2 ml-2  font-bold' >Solar Eruption</h1>
                  </div>
              </div>   
              <div className=' p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/2/26/Solar_Fragment.png'/> <h1 className='ml-1' >Solar Fragment</h1><h1 className='ml-1 text-sm text-white/75'>x18</h1>
                  </div>
              </div>
              <div className='p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/e/e2/Ancient_Manipulator.png'/> <h1 className='text-base ml-2' >Ancient Manipulator</h1>
                  </div>
              </div>
          </div>
    </div>
  )
}
