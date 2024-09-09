import styles from '../../../../css/App.module.scss'

export const WrathPotion = () => {
  return (
    <div className={styles.main}>
        <h1>The Wrath Potion is a buff potion which grants the Wrath buff when consumed. The buff generally increases damage dealt by weapons by 10%. This lasts for 4 minutes</h1>
     <div>
        <h1 className='mt-2 text-lg' >Crafting:</h1>
        <div className='flex'>
            <div className='w-44 p-2'>
                <h1 className='text-lg' >Result</h1>
                <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png'/> <h1 className='mt-2 ml-2' >Wrath Potion</h1>
                </div>
            </div>   
            <div className='w-44 p-2'>
                <h1>Ingridients</h1>
                <div className='flex mt-2' >
                    <img src='https://terraria.wiki.gg/images/1/16/Bottled_Water.png'/> <h1 className='ml-2' >Bottled Water</h1>
                </div>
                <div className='flex mt-2' >
                    <img src='https://terraria.wiki.gg/images/a/ac/Ebonkoi.png'/> <h1 className='ml-2' >Ebonkoi</h1>
                </div>
                <div className='flex mt-2' >
                    <img src='https://terraria.wiki.gg/images/c/c8/Deathweed.png'/> <h1 className='ml-2' >Deathweed</h1>
                </div>
            </div>
            <div>
                <h1 className='' >Crafting station</h1> 
                <div className='flex' >
                    <img src='https://terraria.wiki.gg/images/4/40/Bottle_%28crafting_station%29.png'/> <h1>Placed Bottle</h1>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}
