import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const PapyrusScarab = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Papyrus Scarab </a>is a Hardmode, post-Plantera accessory that combines the bonuses of the Necromantic Scroll and the Hercules Beetle. When equipped, it increases the damage of summon weapons by 15%, increases their knockback by 2, and increases the players maximum number of minions by one.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/a/a8/Papyrus_Scarab.png'/> <h1 className=' ml-2 font-bold' >Papyrus Scarab</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/6/67/Necromantic_Scroll.png'/> <Link className='ml-1 text-sm ' >Necromantic Scroll</Link>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/5/5a/Hercules_Beetle.png'/> <Link className='ml-1 text-sm ' >Hercules Beetle</Link>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1  className='text-base ml-2' >Tinkerer Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         