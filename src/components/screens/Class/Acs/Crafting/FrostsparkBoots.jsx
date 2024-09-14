import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const FrostsparkBoots = () => {
  return (
    <div className={styles.main}>
        <h1 className='bg-forWiki-bgBrown p-2 roundet-md' ><a className='font-bold'>The Frostspark Boots</a> are an accessory crafted by combining Lightning Boots and Ice Skates together at a Tinkerers Workshop. It provides the benefits of both. They also have an 8% increased movement speed.

Frostspark Boots display a different particle effect than the Spectre Boots or Lightning Boots: they produce snow clouds similar to those made by the Blizzard in a Bottle.</h1>    
      <div>
        <div>
          <h1 >Crafting</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                      <img src='https://terraria.wiki.gg/images/1/19/Frostspark_Boots.png'/> <h1 className='mt-2 ml-2 font-bold' >Frostspark Boots</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                    <img src='https://terraria.wiki.gg/images/2/2c/Lightning_Boots.png'/> <Link to='/acs/LightningBoots' className='mt-2 ml-2 flex  hover:underline hover:text-blue-500 duration-200' >Lightning Boots</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/0/0a/Ice_Skates.png'/> <h1  className='ml-1 ' >Ice Skates</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 >Crafting station</h1> 
                  <div className='flex' >
                      <img  src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2 ' >Tinkerers Workshopr</h1>
                  </div>
              </div>
          </div>
        </div>
        <div>
          <h1 >Used in</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 >Result</h1>
                  <div className='flex'>
                      <img src='https://terraria.wiki.gg/images/b/ba/Terraspark_Boots.png'/> <Link to='/meleeWeapons/nightsEdge' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Terraspark Boots</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/1/19/Frostspark_Boots.png'/> <h1 className='mt-2 ml-2 font-bold' >Frostspark Boots</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img src='https://terraria.wiki.gg/images/1/1a/Lava_Waders.png'/> <Link to='/acs/LavaWaders' className='ml-1 hover:underline hover:text-blue-500 duration-200'>Lava Waders</Link>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 >Crafting station</h1> 
                  <div className='flex' >
                      <img  src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2 ' >Tinkerers Workshopr</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          
