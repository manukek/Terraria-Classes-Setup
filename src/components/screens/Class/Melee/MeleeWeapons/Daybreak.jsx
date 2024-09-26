import styles from '../../../../css/App.module.scss'

export const Daybreak = () => {
  return (
    <div className={styles.main}>
        <h1><a className='font-bold'>The Daybreak</a> is a Hardmode, post-Lunatic Cultist melee weapon that autofires sun spear projectiles which, upon contact with an enemy, stick to the damaged target and inflict the Daybroken debuff, dealing 25 damage per quarter-second for a duration of five seconds. Up to a maximum of eight spear projectiles can be lodged into a single enemy at one time, resulting in a maximum of 800 DPS from the afflicted debuff.[1]

    Solar Explosions are produced from the Daybreaks spears once the debuffs duration expires, once the afflicted enemy dies, when a spear collides with solid tiles, or when the spear limit is reached and another thrown spear attempts to affect the same afflicted target. These explosions inflict the weapons base damage and also apply the Daybroken debuff to nearby enemies.
    
    Its best modifier is Godly or Demonic. Both modifiers increase the average damage output by the same amount.</h1>
<h1 className='text-xl mt-2'>Crafting:</h1>
<div className='flex'>
              <div className=' p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/7/77/Daybreak.png'/> <h1 className='mt-2 ml-2  font-bold' >Daybreak</h1>
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
