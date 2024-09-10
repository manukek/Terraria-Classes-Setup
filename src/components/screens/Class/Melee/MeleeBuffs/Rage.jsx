

import styles from '../../../../css/App.module.scss'

export const Rage = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Rage Potion</a> is a buff potion which grants the Rage buff when consumed. The buff increases the players critical strike chance by 10%. This lasts for 4 minutes</h1>    
      <div className=''>
        <div className=' w-96'>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-5 h-7' src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png'/> <h1 className='mt-2 ml-2' >Rage potion</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/1/16/Bottled_Water.png'/> <h1 className='ml-1 text-sm' >Botteled water</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/9/9d/Hemopiranha.png'/> <h1 className='ml-2 text-sm' >Hemopiranha</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-5 h-5' src='https://terraria.wiki.gg/images/c/c8/Deathweed.png'/> <h1 className='ml-2 text-sm' >Deathweed</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/4/40/Bottle_%28crafting_station%29.png'/> <h1 className='text-base ml-2' >Placed Bottle</h1>
                  </div>
              </div>
          </div>
        </div>
        
        </div>
      </div>
  )
}

