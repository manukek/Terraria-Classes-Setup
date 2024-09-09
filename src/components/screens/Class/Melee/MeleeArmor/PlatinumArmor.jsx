import styles from '../../../../css/App.module.scss'

export const PlatinumArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='bg-slate-50 p-3 rounded-md border-4 border-gray-50' ><a className='font-bold'>Platinum armor</a>. is a pre-Hardmode armor set. It consists of the Platinum Helmet, Platinum Chainmail, and Platinum Greaves. It takes a total of  75 /  90 Platinum Bars ( 300 /  360 Platinum Ores) to craft a full set.

Its same-tier counterpart is the Gold armor.</h1>    
      <div className='mt-4 flex justify-between'>
        <div className=' bg-slate-200 rounded-md border-4 border-gray-100 w-96'>
          <h1 className='text-center p-2 rounded-sm bg-gray-50' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='text-center border border-gray-500 h-7 mb-2 bg-slate-50 rounded-md text-base' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/9/94/Platinum_armor.png'/> <h1 className='mt-2 ml-2' >Platinum Armor</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='text-center border text-base border-gray-500 h-7 mb-2 bg-slate-50 rounded-md' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-10 h-5' src='https://terraria.wiki.gg/images/d/d2/Platinum_Bar.png'/> <h1 className='ml-1 text-sm' >Platinum Bar x75</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='border border-gray-500 h-7 mb-2 text-center rounded-md bg-slate-50 text-sm' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <h1 className='text-base ml-2' >Iron Anvil</h1>
                  </div>
              </div>
          </div>
        </div>
        <div className='bg-slate-200 rounded-md border-4 border-gray-100 w-96 '>
          <h1 className='text-center p-2 rounded-sm bg-gray-50' >With this armor you can kill bosses like</h1>
          <div className='flex'>
            <img src='https://terraria.wiki.gg/images/9/93/King_Slime.gif' className='w-10 h-10'/> <h1>King Slime</h1>
          </div>
          <div className='flex'>
            <img src='https://terraria.wiki.gg/images/7/70/Eye_of_Cthulhu_%28Phase_1%29.gif' className='w-8 h-12'/> <h1>Eye of Cthulhu</h1>
          </div>
          <div className='flex'>
            <img src='https://terraria.wiki.gg/images/c/cc/World_Feeder.png' className='w-32 h-5'/> <h1>World Feeder</h1>
          </div>
          <div className='flex'>
            <img src='https://terraria.wiki.gg/images/1/18/Brain_of_Cthulhu_%28First_Phase%29.gif' className='w-10 h-10'/> <h1>Brain of Cthulhu</h1>
          </div>
          <div className='flex'>
            <img src='https://terraria.wiki.gg/images/a/a3/Skeletron_Head.png' className='w-10 h-12'/> <h1>Skeletron</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
