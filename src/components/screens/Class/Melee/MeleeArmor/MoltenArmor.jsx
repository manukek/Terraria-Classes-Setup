import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const MoltenArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className=' p-2 roundet-md' ><a className='font-bold'>Molten armor </a>is an armor set consisting of the Molten Helmet, Molten Breastplate, and Molten Greaves. It has the highest defense of any pre-Hardmode armor set.</h1>   
{/* bufs */}
<div>
        <h1 className='font-bold mt-3'>The stat bonuses are:</h1>
        <div className='ml-3'>
            <h1>+25 defense</h1>
            <h1>+17% melee damage</h1>
            <h1>+7% melee speed</h1>
            <h1>+7% melee critical strike chance</h1>
            <h1>+4 defense</h1>
            <h1>+15% mining speed</h1>
            <h1>+0.5 minion knockback</h1>
        </div>
      </div> 
      <div className=''>
        <div className=''>
          <h1 className='' >Crafting</h1>
          <div className='flex'>
              <div className='w-44 p-2'>
                  <h1 className='w-52' >Result</h1>
                  <div className='flex'>
                      <img className='w-7 h-12' src='https://terraria.wiki.gg/images/f/f1/Molten_armor.png'/> <h1 className='mt-2 ml-2 font-bold' >Molten armor</h1>
                  </div>
              </div>   
              <div className='w-52 p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='flex mt-2' >
                      <img className='' src='https://terraria.wiki.gg/images/d/dc/Hellstone_Bar.png'/> <h1 className='ml-1 text-sm ' >Hellstone Bar</h1><h1 className='ml-1 text-sm text-white/75'>x45</h1>
                  </div>
                  <div>
                    <h1 className='ml-1 text-sm text-white/75' >or</h1>
                  </div>
                  <div className='flex ' >
                      <img className='' src='https://terraria.wiki.gg/images/8/8f/Hellstone.png'/> <h1 className='ml-1 text-sm text-white/75 ' >Hellstone</h1><h1 className='ml-1 text-sm text-white/75'>x135</h1>
                  </div>
                  <div className='flex ' >
                      <img className='' src='https://terraria.wiki.gg/images/2/23/Obsidian.png'/> <h1 className='ml-1 text-sm text-white/75 ' >Obsidian</h1><h1 className='ml-1 text-sm text-white/75'>x45</h1>
                  </div>
              </div>
              <div className='w-52 p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/c/c3/Iron_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200 ' >Iron Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/32/Lead_Anvil.png'/> <Link to='/wiki/preHardMode/preHardModeAnvils' className='text-base ml-2  hover:underline hover:text-blue-500 duration-200 ' >Lead Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          

