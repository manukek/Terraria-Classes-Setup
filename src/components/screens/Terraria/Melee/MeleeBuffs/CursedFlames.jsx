import styles from '../../../../css/App.module.scss'


export const CursedFlames = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Flask of Cursed Flames </a>is a Hardmode flask that causes melee weapons and whips to inflict the Cursed Inferno debuff for 3–6 seconds on enemies hit. Melee weapons that fire projectiles will also inflict the debuff on enemies hit by the projectiles (except for the Flairons bubbles).

The Flask of Cursed Flames cannot be used in conjunction with other flasks, and using it will remove any existing flask effects.  Like all other flasks, the effect will not be canceled when the player dies.

The Flask of Cursed Flames will inflict the Cursed Flames debuff in PvP scenarios.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='/Flask_of_Cursed_Flames.webp'/> <h1 className='ml-2 font-bold' >Flask of C.F.</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='/Bottled_Water.webp'/> <h1 className='ml-1 ' >Botteled water</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='/Cursed_Flame.webp'/> <h1 className='ml-2' >Cursed Flame</h1><h1 className='ml-1 text-sm  text-white/75'>x2</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex mt-3' >
                    <img className='' src='/Imbuing_Station.webp'/> <h1 className='text-base ml-2' >Imbuing Station</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


