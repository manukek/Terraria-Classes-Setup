import styles from '../../../../css/App.module.scss'

export const PlatinumArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>Platinum armor</a>. is a pre-Hardmode armor set. It consists of the Platinum Helmet, Platinum Chainmail, and Platinum Greaves. It takes a total of  75 /  90 Platinum Bars ( 300 /  360 Platinum Ores) to craft a full set.

Its same-tier counterpart is the Gold armor.</h1>    
      <div className=''>
        <div className=' w-96'>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/9/94/Platinum_armor.png'/> <h1 className='mt-2 ml-2' >Platinum Armor</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-10 h-5' src='https://terraria.wiki.gg/images/d/d2/Platinum_Bar.png'/> <h1 className='ml-1 text-sm' >Platinum Bar x75</h1>
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
