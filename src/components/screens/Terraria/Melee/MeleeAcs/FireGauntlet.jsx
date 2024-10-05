import styles from '../../../../css/App.module.scss'

export const FireGauntlet = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Fire Gauntlet</a> is a Hardmode accessory that boosts melee weapons in the following ways:

Both the weapon sprite and projectile emit orange light particles that gives off light
<div className='mt-2'>
            <div className=''>
                <h1>+100% knockback</h1>
                <h1>+12% damage</h1>
                <h1>+12% attack speed </h1>
                <h1>They gain autoswing (also applies to whips)</h1>
                <h1>+10% size on some melee weapons</h1>
            </div>
    </div>

</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20] text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                  <img className='' src='/Fire_Gauntlet.webp'/> <h1 className='ml-2 font-bold' >Fire Gauntlet</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20] text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Magma_Stone.webp'/> <h1 className='ml-1 text-sm' >Magma Stone</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='/Mechanical_Glove.webp'/> <h1 className='ml-2 text-sm' >Mechanical Glove</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-50 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20] text-center rounded-md mb-1'>Crafting station</h1> 
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
          




