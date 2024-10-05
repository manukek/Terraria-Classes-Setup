import styles from '../../../../css/App.module.scss'

export const FlinxFurCoat = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Flinx Fur Coat</a> is a pre-Hardmode armor piece. When equipped, it gives the player an additional minion slot, and increases summon damage by 5%.</h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/9/93/Flinx_Fur_Coat.png'/> <h1 className=' ml-2 font-bold' >Flinx Fur Coat</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/8/83/Silk.png'/> <h1 className='ml-1 text-sm ' >Silk</h1><h1 className='ml-1 text-sm text-white/75'>x10</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/8/80/Flinx_Fur.png'/> <h1 className='ml-1 text-sm ' >Flinx Fur</h1><h1 className='ml-1 text-sm text-white/75'>x8</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/4/4e/Gold_Bar.png'/> <h1 className='ml-1 text-sm ' >Gold Bar</h1><h1 className='ml-1 text-sm text-white/75'>x8</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/3/3b/Loom.png'/> <h1 className='text-base ml-2' >Loom</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         