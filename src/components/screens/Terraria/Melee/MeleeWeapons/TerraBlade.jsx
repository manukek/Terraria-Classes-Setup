
import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TerraBlade = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold'>The Terra Blade</a> is a Hardmode, post-Plantera projectile sword that fires a wide green slash wave projectile with each swing. It also has a large aura of energy around the blade when swung, which significantly increases the range at which the weapon can deal damage to enemies, including coverage behind the player. The Terra Blades projectile deals 100% of the weapons damage at first and pierces an infinite amount of targets before applying a 25% damage penalty for each target it pierces.[1] The projectile will disappear after 1.5 seconds,[2] upon hitting a solid block, or when its damage falls to 0 after piercing.[3] The Terra Blade creates a unique green flash if the blade, its aura, or its projectile strikes an enemy.

It is later used to craft the Zenith, which is the strongest melee weapon in the game.

Its best modifier is Legendary. While Light does decrease the base use time by 1, the added critical strike chance and the multiplicative damage bonuses of Legendary are better in any practical use case.</h1>
    <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-10 h-10' src='/Terra_Blade.webp'/> <Link to='/meleeWeapons/terraBlade' className='mt-2 ml-2  hover:underline hover:text-blue-500 duration-200' >Terra Blade</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                     <img className='w-10 h-10' src='/True_Nights_Edge.webp'/> <Link to='/meleeWeapons/trueNightsEdge' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >True Nights Edge</Link>
                  </div>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='/True_Excalibur.webp'/> <Link to='/meleeWeapons/TrueExcalibur' className='ml-1 text-sm mt-2  hover:underline hover:text-blue-500 duration-200 ' >True Excalibur</Link>
                  </div>
                  <div className='flex mt-1' >
                  <img className='' src='/Broken_Hero_Sword.webp'/> <h1 className='ml-2 text-sm ' >Broken Hero Sword</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-5 ' src='/Mythril_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200   ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-5' src='/Orichalcum_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200  ' >Orichalcum Anvilr</Link>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}





