import styles from '../../../../css/App.module.scss'

export const NebulaBlaze = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Nebula Blaze</a> is a Hardmode, post-Lunatic Cultist magic weapon which autofires pink, high-velocity projectiles that home in on enemies if they are nearby, with a 1/5 (20%) chance to fire a larger, faster blue projectile that has a higher velocity and deals 300% or three times the weapons base damage (390 damage). The Nebula Blaze fires inaccurately, akin to the Chain Gun and similar weapons – however, its projectiles home in from a certain angle, similar to the Spectre Staff. When selected, it appears as a pink glow covering the players hand, which leaves behind a pink particle trail as the player moves.

Its best modifier is Mythical.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Nebula_Blaze.webp'/> <h1 className=' ml-2 font-bold' >Nebula Blaze</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Nebula_Fragment.webp'/> <h1 className='ml-1 text-sm ' >Nebula Fragment</h1><h1 className='ml-1 text-sm text-white/75'>x18</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                    <img className='' src='/Ancient_Manipulator.webp'/> <h1 className='text-base ml-2' >Ancient Manipulator</h1>
                  </div> 
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         