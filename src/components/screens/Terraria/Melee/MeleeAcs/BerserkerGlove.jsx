import styles from '../../../../css/App.module.scss'

export const BerserkerGlove = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Berserkers Glove</a> is a Hardmode accessory crafted from the Power Glove and Flesh Knuckles, granting the abilities of both. It grants the following:
        <div className='mt-2 '>
                <h1>+8 defense</h1>
                <h1>+12% increased melee speed</h1>
                <h1>+100% increased melee knockback</h1>
                <h1>+10% increased melee weapon size</h1>
                <h1>+400 aggro</h1>
                <h1>Autoswing for melee weapons and whips</h1>
            </div>
        </h1>  
            
      <div>
      <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Crafting</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
              <div className='w-52'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Result</h1>
                  <div className='flex mt-3'>
                    <img className='' src='https://terraria.wiki.gg/images/0/05/Berserker%27s_Glove.png'/> <h1 className='ml-2 font-bold' >Berserkers Glove</h1>
                  </div>
              </div>   
                <div className='border border-gray-300 h-50 ml-2' >
              </div>
              <div className='w-52 ml-2'>
                  <h1 className='font-bold border border-gray-600 bg-slate-100  text-center rounded-md mb-1'>Ingridients</h1>
                  <div className='flex mt-3' >
                     <img className='' src='https://terraria.wiki.gg/images/2/28/Power_Glove.png'/> <h1 className='ml-1' >Power Glove</h1>
                  </div>
                  <div className='flex mt-3' >
                  <img className='' src='https://terraria.wiki.gg/images/b/b9/Flesh_Knuckles.png'/> <h1 className='ml-2 text-sm' >Flesh Knuckles</h1>
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
          



