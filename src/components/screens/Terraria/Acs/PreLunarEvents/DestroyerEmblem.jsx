import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const DestroyerEmblem = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Destroyer Emblem</a> is a Hardmode, post-Golem accessory that gives:
          <h1>+10% increased damage to all weapons.</h1>
          <h1>+8% increased critical strike chance</h1>
        </h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Destroyer_Emblem.webp'/> <h1 className=' ml-2  font-bold' >Destroyer Emblem</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Avenger_Emblem.webp'/> <Link to='/acs/AvangerEmblem' className='ml-1 hover:underline hover:text-blue-500 duration-200 ' >Avanger Emblem</Link>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='/Eye_of_the_Golem.webp'/> <h1  className='ml-1' >Eye of the Golem</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                      <img className='' src='/Tinkerer_Workshop.webp'/> <h1 className='text-base ml-2' >Tinkerers Workshop</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          



