import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const TitaniumArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Titanium armor </a>is a Hardmode armor set crafted from Titanium Bars, and is the alternative to Adamantite armor. Like many Hardmode armors, it has three different headgear/helmet options, allowing the player to focus on magical, melee, or ranged combat. Crafting a one-helmet set requires 59 Titanium Bars, made from  236 /  295 Titanium Ore. Crafting all five pieces requires 85 Titanium Bars or  340 /  425 Titanium Ore.
        <div>
            <div className='mt-3'>
                <h1>When the full set is equipped, striking an enemy with a melee, ranged, or magic weapon, or having an enemy be hit by a minion or sentry, will grant the Titanium Barrier buff, in which titanium shards spawn that will rotate around the player and damage enemies who come in contact with them. There can be a total of 7 shards spinning around the player, each dealing over 50 damage with high knockback, incapable of achieving critical strikes, and lasting 10 seconds, refreshing when the player deals damage.</h1>
            </div>
          </div>
        </h1>  
          
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-2'>
                    <img className='' src='/Titanium_armor.webp'/> <h1 className='mt-2 ml-2' >Titanium armor</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-1' >
                    <img className='' src='/Titanium_Bar.webp'/> <h1 className='ml-1 text-sm' >Titanium Bar x59</h1>
                  </div>                
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Mythril_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2    hover:underline hover:text-blue-500 duration-200 ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='/Orichalcum_Anvil.webp'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2   hover:underline hover:text-blue-500 duration-200 ' >Orichalcum Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         