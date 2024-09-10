import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const Muramasa = () => {
  return (
    <div className={styles.main}>
        <h1 className='' ><a className='font-bold'>The Muramasa</a> is a pre-Hardmode, post-Skeletron sword that has a slightly longer reach than the Phaseblade and has a fast attack speed. It is also one of the few autoswing swords that can be found during pre-Hardmode. When swung, it emits a small amount of blue light. On the Desktop version, Console version, and  Mobile version, striking an enemy with the Muramasa will generate a blue slash projectile from a random direction, hitting the enemy for 50% of the weapons damage (12 base damage).The smaller slashes also have 5 armor penetration.The Muramasa has a 1/7 (14.29%) chance of being obtained from the Locked Gold Chests found in the Dungeon, as well as a 1/7 (14.29%) chance of being obtained from Golden Lock Boxes.

The Muramasa is one of the key ingredients in crafting the Nights Edge.

Its best modifier is Legendary.</h1>    
      <div className=''>
        <div className=''>
          <h1 className='' >Used in</h1>
          <div className='flex'>
              <div className='w-52 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <Link to='/meleeWeapons/nightsEdge' className='mt-2 ml-2  text-links hover:underline duration-75' >Nights Edge</Link>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/1/13/Light%27s_Bane.png'/> <Link className='ml-1 text-sm  text-links hover:underline duration-75' >Lights Bane</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-12 h-14' src='https://terraria.wiki.gg/images/c/c2/Muramasa.png'/> <Link className='ml-1 text-sm  text-links hover:underline duration-75' >Muramasa</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-16 h-16' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <Link className='ml-2 text-sm  text-links hover:underline duration-75' >Blade of Grass</Link>
                  </div>
                  <div className='flex mt-2' >
                      <img className='w-16 h-16' src='https://terraria.wiki.gg/images/c/cf/Volcano.png'/> <Link className='ml-2 text-sm  text-links hover:underline duration-75' >Volcano</Link>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-12 h-8 ' src='https://terraria.wiki.gg/images/f/f8/Demon_Altar.png'/> <Link className='text-base ml-2  text-links hover:underline duration-75' >Demon altar</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-12 h-8' src='https://terraria.wiki.gg/images/7/70/Crimson_Altar.png'/> <Link className='text-base ml-2  text-links hover:underline duration-75' >Crimson Altar</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          
