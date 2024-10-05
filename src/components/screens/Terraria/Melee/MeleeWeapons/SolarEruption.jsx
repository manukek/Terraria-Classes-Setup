import styles from '../../../../css/App.module.scss'

export const SolarEruption = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Solar Eruption</a> is a Hardmode, post-Lunatic Cultist melee weapon which autofires a long whipsword from the players position that quickly retracts. The Solar Eruptions tip follows a narrow arc in the general direction of the cursor and pierces an unlimited number of enemies before retracting. The spiked shaft can pass through blocks and generates a Solar Explosion upon damaging an enemy. This explosion then inflicts the Daybroken debuff to damaged enemies as well as other enemies within their vicinity, which deals ticks of 25 damage per quarter-second for a duration of 5 seconds.

Its best modifier is Godly or Demonic. Both modifiers increase the average damage output by the same amount.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='' src='/Solar_Eruption.webp'/> <h1 className='mt-2 ml-2  font-bold' >Solar Eruption</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='' src='/Solar_Fragment.webp'/> <h1 className='ml-1' >Solar Fragment</h1><h1 className='ml-1 text-white/75'>x18</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                    <img className='' src='/Ancient_Manipulator.webp'/> <h1 className='text-base ml-2' >Ancient Manipulator</h1>
                  </div>                
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         