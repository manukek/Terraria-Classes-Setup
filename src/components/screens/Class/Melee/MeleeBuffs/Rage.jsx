

import styles from '../../../../css/App.module.scss'

export const Rage = () => {
  return (
    <div className={styles.main}>
        <h1 className='bg-slate-50 p-3 rounded-md border-4 border-gray-50' ><a className='font-bold'>The Rage Potion</a> is a buff potion which grants the Rage buff when consumed. The buff increases the players critical strike chance by 10%. This lasts for 4 minutes</h1>    
      <div className='mt-4 flex justify-between'>
        <div className=' bg-slate-200 rounded-md border-4 border-gray-100 w-96'>
          <h1 className='text-center p-2 rounded-sm bg-gray-50' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='text-center border border-gray-500 h-7 mb-2 bg-slate-50 rounded-md text-base' >Result</h1>
                  <div className='flex'>
                      <img className='w-5 h-7' src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png'/> <h1 className='mt-2 ml-2' >Rage potion</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='text-center border text-base border-gray-500 h-7 mb-2 bg-slate-50 rounded-md' >Ingridients</h1>
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
                  <h1 className='border border-gray-500 h-7 mb-2 text-center rounded-md bg-slate-50 text-sm' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/4/40/Bottle_%28crafting_station%29.png'/> <h1 className='text-base ml-2' >Placed Bottle</h1>
                  </div>
              </div>
          </div>
        </div>
        <div className='bg-slate-200 rounded-md border-4 border-gray-100 w-96 '>
          <h1 className='text-center p-2 rounded-sm bg-gray-50' >With this potoin you can kill all bosses</h1>
        </div>
        <div className='bg-slate-200 rounded-md border-4 border-gray-100 w-96 '>
          <h1 className='text-center p-2 rounded-sm bg-gray-50' >Used in</h1>
          <div className='flex'>
              <h1>No use</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

