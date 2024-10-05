import styles from '../../../../css/App.module.scss'

export const ObsidianArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>Obsidian armor</a> is an armor set that consists of the Obsidian Outlaw Hat, Obsidian Longcoat, and the Obsidian Pants.
       <h1>A full set of Obsidian armor provides the following benefits:</h1> 
        <div className='ml-2'>
            <h1>+15 defense</h1>
            <h1>+31% summon damage</h1>
            <h1>+1 minion slot</h1>
            <h1>+15% whip speed</h1>
            <h1>+30% whip range</h1>
        </div>
        </h1>    
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-40 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/e/ea/Obsidian_armor.png'/> <h1 className=' ml-2 font-bold' >Obsidian armor</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-36 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/2/23/Obsidian.png'/> <h1 className='ml-1 text-sm ' >Obsidian</h1><h1 className='ml-1 text-sm text-white/75'>x60</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/8/83/Silk.png'/> <h1 className='ml-1 text-sm ' >Silk</h1><h1 className='ml-1 text-sm text-white/75'>x30</h1>
                  </div>
                  <div className='flex mt-3' >
                    <img className='' src='https://terraria.wiki.gg/images/e/ea/Tissue_Sample.png'/> <h1 className='ml-1 text-sm ' >Tissue Sample</h1><h1 className='ml-1 text-sm text-white/75'>x20</h1>
                  </div>
              </div>
              <div className='border border-gray-300 h-36 ml-2' ></div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600  dark:bg-slate-100 bg-[#1c1f20]  text-center rounded-md mb-1'>Crafting station</h1> 
                  <div className='flex' >
                      <img className='' src='https://terraria.wiki.gg/images/6/67/Hellforge.png'/> <h1  className='text-base ml-2 ' >Hellforge</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
          


         