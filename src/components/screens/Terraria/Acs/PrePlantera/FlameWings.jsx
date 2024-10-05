import styles from '../../../../css/App.module.scss'

export const FlameWings = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Wings are Hardmode</a> (with the single exception of Fledgling Wings) accessories that can allow the player to fly temporarily by pressing and holding the ↷ Jump key. Flight time is reset when the player rests on solid objects, including both standing on blocks and using climbing items like Ropes, hooks, Shoe Spikes, and Climbing Claws. Certain wing types also allow the player to hover at fixed heights by holding the ▼ Down key during flight, and/or accelerate their ascent speed by holding the ▲ Up key.

After flight time has been exhausted, a player can continue holding the ↷ Jump key to glide. Gliding fall speed can be accelerated by holding the ▼ Down key in addition.

Wings additionally grant immunity from fall damage (except when overridden by the Stoned debuff), rendering fall damage protection items like the Lucky Horseshoe unnecessary.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-44 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img src='https://terraria.wiki.gg/images/b/bf/Flame_Wings.png'/> <h1 to='/meleeWeapons/nightsEdge' className='mt-2 ml-2 font-bold' >Flame Wings</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-40 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='w-6 h-6' src='https://terraria.wiki.gg/images/a/a3/Soul_of_Flight.png'/> <h1 className='ml-2 font-bold ' >Soul of Flight</h1><h1 className='ml-1  text-white/75'>x20</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img src='https://terraria.wiki.gg/images/f/f3/Fire_Feather.png'/> <h1  className='ml-1 text-sm font-bold'>Fire Feather</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-40 ml-2' ></div>
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
          


