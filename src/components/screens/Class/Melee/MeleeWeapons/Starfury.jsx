import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const Starfury = () => {
  return (
    <div className={styles.main}>
        <h1 className='bg-slate-50 p-3 rounded-md border-4 border-gray-50' ><a className='font-bold'>The Starfury</a> is a pre-Hardmode sword which occasionally summons a star projectile from the sky to the location of the cursor when swung, and costs no ammunition or mana. The star emits light, deals 1.5×   the swords damage (37  base damage) but no knockback.[1] The star can pierce up to 1 target, hitting a total of 2 targets. The star will travel through all blocks until it reaches the lowest empty space at or above the players cursor, after which it will break on the next block it hits. The Starfury has a  1/4 (25%) /  1/3 (33.33%) chance of being found inside Skyware Chests on Floating Islands, as well as a 1/4 (25%) chance of being obtained from Sky Crates and Azure Crates.

Its best modifier is Legendary..</h1>    
      <div className='mt-4 flex justify-between'>
        <div className=' bg-slate-200 rounded-md border-4 border-gray-100 w-96'>
          <h1 className='text-center p-2 rounded-sm bg-gray-50' >Crafting</h1>
          <div className='flex'>
              <h1 className='p-2'>The Starfury has a  1/4 (25%) chance of being found inside Skyware Chests on Floating Islands, as well as a 1/4 (25%) chance of being obtained from Sky Crates and Azure Crates.</h1>
          </div>
        </div>
        <div className='bg-slate-200 rounded-md border-4 border-gray-100 w-96 '>
          <h1 className='text-center p-2 rounded-sm bg-gray-50' >With this weapon you can kill bosses like</h1>
          <div className='p-2'>
          <div className='flex py-2'>
            <img src='https://terraria.wiki.gg/images/9/93/King_Slime.gif' className='w-10 h-10'/> <h1>King Slime</h1>
          </div>
          <div className='flex py-2'>
            <img src='https://terraria.wiki.gg/images/7/70/Eye_of_Cthulhu_%28Phase_1%29.gif' className='w-8 h-12'/> <h1>Eye of Cthulhu</h1>
          </div>
          <div className='flex py-2'>
            <img src='https://terraria.wiki.gg/images/c/cc/World_Feeder.png' className='w-32 h-5'/> <h1>World Feeder</h1>
          </div>
          <div className='flex py-2'>
            <img src='https://terraria.wiki.gg/images/1/18/Brain_of_Cthulhu_%28First_Phase%29.gif' className='w-10 h-10'/> <h1>Brain of Cthulhu</h1>
          </div>
          <div className='flex py-2'>
            <img src='https://terraria.wiki.gg/images/a/a3/Skeletron_Head.png' className='w-10 h-12'/> <h1>Skeletron</h1>
          </div>
        </div>
        </div>
        <div className='bg-slate-200 rounded-md border-4 border-gray-100 w-96 '>
          <h1 className='text-center p-2 rounded-sm bg-gray-50' >Used in</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='text-center border border-gray-500 h-7 mb-2 bg-slate-50 rounded-md text-base' >Result</h1>
                  <div className='flex'>
                      <img className='w-12 h-12' src='https://terraria.wiki.gg/images/6/66/Zenith.png'/> <h1 className='mt-2 ml-2' >Zenith</h1>
                  </div>
              </div>   
              <div className='w-44 p-2'>
                  <h1 className='text-center border text-base border-gray-500 h-7 mb-2 bg-slate-50 rounded-md' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='w-8 h-8' src='https://terraria.wiki.gg/images/4/4d/Terra_Blade.png'/> <h1 className='ml-1 text-sm' >Terra Blade</h1>
                  </div>
                  <Link to='/meleeWeapons/zenith' className='text-blue-500 hover:underline' >9 more lines</Link>
              </div>
              <div className='w-44 p-2'>
                  <h1 className='border border-gray-500 h-7 mb-2 text-center rounded-md bg-slate-50 text-sm' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-12 h-8' src='https://terraria.wiki.gg/images/f/f8/Demon_Altar.png'/> <h1 className='text-base ml-2' >Demon altar</h1>
                  </div>
                  <div className='flex' >
                      <img className='w-12 h-8' src='https://terraria.wiki.gg/images/7/70/Crimson_Altar.png'/> <h1 className='text-base ml-2' >Crimson Altar</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
