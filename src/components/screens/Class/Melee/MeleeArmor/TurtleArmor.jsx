import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TurtleArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className=' p-2 roundet-md' ><a className='font-bold'>Turtle armor</a> is a Hardmode armor set available after defeating all three mechanical bosses. A full set grants a vastly amplified Thorns effect upon taking contact damage from an enemy, which reflects  200%  of the enemys contact damage back at them and inflicts a knockback of 10 (Extremely strong).[1] The set consists of the Turtle Helmet, Turtle Scale Mail, and Turtle Leggings.

With no vanity items covering the Turtle armor, a turtle shell appears on the players back (much like the Leaf Blower, Flamethrower, Elf Melter, and Heat Ray backpacks), if the full set is equipped.

Crafting this set requires a total of 54 Chlorophyte Bars ( 270 /  324 Chlorophyte Ore) and 3 Turtle Shells.</h1>  
{/* bufs */}
<div>
        <h1 className='font-bold mt-3'>The stat bonuses are:</h1>
        <div className='ml-3'>
            <h1>+14% melee damage</h1>
            <h1>+12% melee critical strike chance</h1>
            <h1>+750 aggro</h1>
            <h1> +15% damage reduction</h1>
        </div>
      </div>  
      <div className=''>
        <div className=''>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='' >Result</h1>
                  <div className='flex'>
                      <img className='' src='https://terraria.wiki.gg/images/d/dd/Turtle_armor.png'/> <h1 className='mt-2 ml-2' >Turtle armor</h1>
                  </div>
              </div>   
              <div className='w-44 p-2 ml-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-8 h-6' src='https://terraria.wiki.gg/images/0/03/Chlorophyte_Bar.png'/> <h1 className='ml-1 text-sm' >Chlorophyte Bar</h1><h1 className='ml-1 text-sm  text-white/75'>x54</h1>
                  </div>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/5/5e/Turtle_Shell.png'/> <h1 className='ml-1 text-sm' >Turtle Shell</h1><h1 className='ml-1 text-sm  text-white/75'>x3</h1>
                  </div>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-5' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-5' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2    hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
