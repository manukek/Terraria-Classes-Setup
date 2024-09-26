import styles from '../../../../css/App.module.scss'

export const WrathPotion = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Rage Potion</a> is a buff potion which grants the Rage buff when consumed. The buff increases the players critical strike chance by 10%. This lasts for 4 minutes</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png'/> <h1 className='mt-2 ml-2' >Wrath Potion</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img src='https://terraria.wiki.gg/images/1/16/Bottled_Water.png'/> <h1 className='ml-2' >Bottled Water</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img src='https://terraria.wiki.gg/images/a/ac/Ebonkoi.png'/> <h1 className='ml-2' >Ebonkoi</h1>
                  </div> 
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/c/c8/Deathweed.png'/> <h1 className='ml-2 ' >Deathweed</h1>
                  </div>                      
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                     <img className='' src='https://terraria.wiki.gg/images/4/40/Bottle_%28crafting_station%29.png'/> <h1 className='text-base ml-2' >Placed Bottle</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


