import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'


export const AvangerEmblem = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Avenger Emblem </a>is a Hardmode accessory that grants 12% increased damage to all weapons.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/c/c3/Avenger_Emblem.png'/> <h1 className='ml-2  font-bold' >Avanger Emblem</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/d/d7/Warrior_Emblem.png'/> <Link to='/meleeAcs/warriorEmblem' className='ml-1 hover:underline hover:text-blue-500 duration-200 ' >Warrior Emblem</Link>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/8/80/Soul_of_Fright.png'/> <h1  className='ml-1 text-sm ' >Soul of Fright</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/3/39/Soul_of_Might.png'/> <h1 className='ml-2 text-sm ' >Soul of Might</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img className='' src='https://terraria.wiki.gg/images/0/0f/Soul_of_Sight.png'/> <h1 className='ml-2 text-sm  ' >Soul of Sight</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='https://terraria.wiki.gg/images/1/17/Tinkerer%27s_Workshop.png'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          



