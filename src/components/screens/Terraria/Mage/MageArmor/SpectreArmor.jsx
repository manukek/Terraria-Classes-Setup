import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const SpectreArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Spectre armor</a> is a Hardmode, post-Plantera armor set that offers magic weapon boosts.

The set consists of the Spectre Robe and Spectre Pants, as well as two different headpieces, the Spectre Hood and the Spectre Mask .

Equipping the full set causes small white orbs to manifest whenever the player hits an enemy with a magic weapon. The effect of these orbs depends on the headpiece option chosen: The Spectre Mask causes the orbs to act as homing projectiles, while the Spectre Hood causes the orbs to travel to a player, healing them.

Spectre Mask set bonus: Homing orb projectiles spawn when dealing magic damage to an enemy, which attack nearby enemies, or the same enemy. The orbs deal  100% /  50% of the damage dealt by the magic weapon fired, before it is doubled by a critical hit (if a critical hit deals 200 damage, the orb will have  100 /  50 base damage). The orb projectile itself can deal critical hits.

Spectre Hood set bonus: Lifesteal orbs spawn when dealing magic damage to an enemy, which fly to the player and restore health by  20% /  8% of damage done (e.g. dealing 50 magic damage heals  10 /  4 health). In multiplayer, the player with the lowest health on the team is healed instead. Equipping  full set with the Spectre Hood /  the Spectre Hood incurs a 40% magic damage decrease.

 Crafting a full set with one headpiece requires 54 Spectre Bars (27 Ectoplasm and 270 Chlorophyte Ore). The full set with both headpieces requires 66 Spectre Bars (33 Ectoplasm and 330 Chlorophyte Ore).

 Crafting a full set with one headpiece requires 54 Chlorophyte Bars (324 Chlorophyte Ore) and 54 Ectoplasm. The full set with both headpieces requires 66 Chlorophyte Bars (396 Chlorophyte Ore) and 66 Ectoplasm.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Spectre_armor.webp'/> <h1 className=' ml-2 font-bold' >Volcano</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Spectre_Bar.webp'/> <h1 className='ml-1 text-sm ' >Spectre Bar</h1><h1 className='ml-1 text-sm text-white/75'>x54</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
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
    </div>
  )
}
          


         