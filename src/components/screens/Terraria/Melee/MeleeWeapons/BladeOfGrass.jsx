import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const BladeOfGrass = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Blade of Grass</a> is a pre-Hardmode sword crafted using materials from the Underground Jungle. It has a decent size and swing reach, and has a 1/4 (25%) chance of inflicting the Poisoned debuff for 7 seconds upon striking enemies.

Blade of Grass is roughly equal to the Volcano in size, making it one of the largest swords in pre-Hardmode. When swung, it fires a small, green Leaf Blade projectile that flies upwards in a circle, leaving behind a green particle effect resembling leaves. The Leaf Blade projectile can pass through blocks, has 20 armor penetration,[2] can automatically target enemies within a radius of 9.375 tiles, deals 25% base damage (4 base damage), can pierce one enemy, and has the same chance to inflict Poisoned for the same duration as the sword itself.

The Blade of Grass is one of the key ingredients in crafting the Nights Edge.

Its best modifier is Legendary.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border dark: dark:bg-slate-100 bg-[#1c1f20] border-gray-600  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                  <img className='w-10 h-10' src='/Blade_of_Grass.webp'/> <h1 className='mt-2 ml-2 font-bold' >Blade of Grass</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                  <img className='w-4 h-5' src='/Stinger.webp'/> <Link to='/wiki/items/stinger'className='ml-1 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Stingers</Link><h1 className='ml-1 text-sm text-white/75'>x12</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img className='w-5 h-4' src='/Jungle_Spores.webp'/> <Link to='/wiki/items/jungle_Spore'className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Jungle Spores</Link><h1 className='ml-1 text-sm  text-white/75'>x15</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img className='w-4 h-6' src='/Vine.webp'/> <Link to='/wiki/items/vine' className='ml-2 text-sm   hover:underline hover:text-blue-500 duration-200  ' >Vine</Link><h1 className='ml-1 text-sm  text-white/75'>x3</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Iron_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Lead_Anvil.webp'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200  ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>

        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Used in</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='w-10 h-10' src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <Link to='/meleeWeapons/nightsEdge' className='mt-2 ml-2   hover:underline hover:text-blue-500 duration-200  ' >Nights Edge</Link>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='w-10 h-10' src='/Lights_Bane.webp'/> <Link to='/meleeWeapons/lightsBane' className='ml-1 text-sm    hover:underline hover:text-blue-500 duration-200  ' >Lights Bane</Link>
                  </div>
                  <div className='flex mt-1' >
                  <img className='w-10 h-10' src='/Muramasa.webp'/> <Link to='/meleeWeapons/muramasa' className='ml-1 text-sm    hover:underline hover:text-blue-500 duration-200  ' >Muramasa</Link>
                  </div>
                  <div className='flex mt-1' >
                  <img className='w-10 h-10' src='/Blade_of_Grass.webp'/> <h1 className='ml-2 text-sm font-bold' >Blade of Grass</h1>
                  </div>
                  <div className='flex mt-1' >
                  <img className='w-10 h-10' src='/Volcano.webp'/> <Link to='/meleeWeapons/volcano' className='ml-2 text-sm    hover:underline hover:text-blue-500 duration-200  ' >Volcano</Link>
                  </div>
                  
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='/Demon_Altar.webp'/> <h1 className='text-base ml-2' >Demon Altar</h1>
                  </div>
                  <div className='flex mt-3' >
                      <img className='' src='/Crimson_Altar.webp'/> <h1 className='text-base ml-2' >Crimson Altar</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         