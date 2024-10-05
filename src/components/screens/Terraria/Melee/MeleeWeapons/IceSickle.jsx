import styles from '../../../../css/App.module.scss'

export const IceSickle = () => {
  return (
    <div className={styles.main} >
      <div>
        <h1 className='' >The Ice Sickle is a Hardmode sword that fires a spinning blue sickle projectile with no ammunition or mana cost. The projectile will gradually reduce speed and eventually stop in midair, exist up to 5 seconds before disappearing, and pierce a limited number of targets. The Ice Sickle can be dropped by Armored Vikings, Ice Elementals, Ice Tortoises, and Icy Mermen, which spawn in the Snow and Ice biomes.</h1>
      </div>
      <div className='mt-2' >
        <h1 className='font-bold'>Obtained from</h1>
        <div>
          <div className='mt-2 flex'>
            <img src='https://terraria.wiki.gg/images/e/ee/Armored_Viking.gif'/> <h1 className='mt-2 mx-2'>Armored Viking</h1> <h1 className='mt-2 text-sm text-white/75'>1%</h1>
          </div>
          <div className='mt-2 flex'>
            <img src='https://terraria.wiki.gg/images/6/66/Ice_Elemental.gif'/> <h1 className='mt-2 mx-2'>Ice Elemental</h1> <h1 className='mt-2 text-sm text-white/75'>1%</h1>
          </div>
          <div className='mt-2 flex'>
            <img src='https://terraria.wiki.gg/images/b/bd/Ice_Tortoise.gif'/> <h1 className='mt-2 mx-2'>Ice Tortoise</h1> <h1  className='mt-2 text-sm text-white/75'>1%</h1>
          </div>
          <div className='mt-2 flex'>
            <img src='https://terraria.wiki.gg/images/7/7b/Icy_Merman.gif'/> <h1 className='mt-2 mx-2'>Icy Merman</h1> <h1 className='mt-2 text-sm text-white/75'>1%</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
