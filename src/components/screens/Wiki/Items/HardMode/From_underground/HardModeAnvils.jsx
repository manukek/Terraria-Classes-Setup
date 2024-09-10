import styles from '../../../../../css/App.module.scss'

export const HardModeAnvils = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Mythril Anvil</a> and <a className='font-bold'>Orichalcum Anvil</a> are Hardmode crafting stations that serve and extend the function of a pre-Hardmode Anvil. These are very crucial to game advancement, as they account for making nearly every Hardmode recipe before the Ancient Manipulator. In addition to acting as a direct replacement to Lead and Iron Anvils and inheriting all of their crafting recipes, they further serve the similar function of crafting bars forged of Hardmode ores into weapons, armor and tools, as well as several other items, such as wings.</h1>    
      <div className=''>
        <div className=' w-96'>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-7 h-5' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <h1 className=' ml-2' >Mythril Anvil</h1>
                  </div>
                  <div className='flex'>
                      <img className='w-7 h-5' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <h1 className=' ml-2' >Orichalcum Anvil</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-8 h-6' src='https://terraria.wiki.gg/images/b/b2/Mythril_Bar.png'/> <h1 className='ml-1 text-sm' >Mythril Bar x10</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-8 h-6' src='https://terraria.wiki.gg/images/2/2e/Orichalcum_Bar.png'/> <h1 className='ml-1 text-sm' >Orichalcum Bar x12</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <h1 className='text-base ml-2' >Iron Anvil</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

