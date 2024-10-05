import styles from '../../../../css/App.module.scss'

export const Daybreak = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Daybreak</a> is a Hardmode, post-Lunatic Cultist melee weapon that autofires sun spear projectiles which, upon contact with an enemy, stick to the damaged target and inflict the Daybroken debuff, dealing 25 damage per quarter-second for a duration of five seconds. Up to a maximum of eight spear projectiles can be lodged into a single enemy at one time, resulting in a maximum of 800 DPS from the afflicted debuff.[1]

Solar Explosions are produced from the Daybreaks spears once the debuffs duration expires, once the afflicted enemy dies, when a spear collides with solid tiles, or when the spear limit is reached and another thrown spear attempts to affect the same afflicted target. These explosions inflict the weapons base damage and also apply the Daybroken debuff to nearby enemies.

Its best modifier is Godly or Demonic. Both modifiers increase the average damage output by the same amount.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='' src='/Daybreak.webp'/> <h1 className='mt-2 ml-2  font-bold' >Daybreak</h1>
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
                    <img className='' src='https://terraria.wiki.gg/images/e/e2/Ancient_Manipulator.png'/> <h1 className='text-base ml-2' >Ancient Manipulator</h1>
                  </div>                
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         