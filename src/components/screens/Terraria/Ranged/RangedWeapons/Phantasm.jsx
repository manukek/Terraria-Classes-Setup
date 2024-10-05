import styles from '../../../../css/App.module.scss'

export const Phantasm = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Phantasm</a> is a Hardmode, post-Lunatic Cultist bow that auto-fires four arrows at once, while only consuming a single arrow from the players inventory. Arrows are loosely grouped and can fire with varied velocities and ranges (similar to the Chlorophyte Shotbow). Constantly shooting with the Phantasm will gradually increase its fire rate from once per 24 ticks[1] up to once per 18 ticks, regardless of use time, meaning that the Phantasm does not benefit from speed bonuses. Stopping the attack or switching to another item will reset this effect immediately, making switching weapons inefficient.

In addition, each successful hit on an enemy causes three Phantasm Arrow projectiles to fire and home in on the target that was hit initially, each one dealing 30% of the original projectiles damage[2], without any additional ammo or mana cost. The rate of fire of these projectiles depends on the current rate of fire of the Phantasm. The Phamtasm also has a 2/3 (66.67%) chance of not consuming ammunition.

Its best modifier is Unreal. Since it does not benefit from speed modifiers, Godly and Demonic provide the same DPS bonus as Unreal. However, Unreal still has the velocity bonus.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Phantasm.webp'/> <h1 className='mt-2 ml-2 font-bold' >Phantasm</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Vortex_Fragment.webp'/> <h1 className='ml-1 text-sm ' >Vortex Fragment</h1><h1 className='ml-1 text-sm text-white/75'>x18</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
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
          


         