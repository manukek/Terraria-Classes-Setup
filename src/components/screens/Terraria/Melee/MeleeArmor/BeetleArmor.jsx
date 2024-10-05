import { Link } from 'react-router-dom'
import styles from '../../../../css/App.module.scss'

export const BeetleArmor = () => {
  return (
    <div className={styles.main}>
        <h1 className=' p-2 roundet-md' ><a className='font-bold'>Beetle armor </a>is a Hardmode, post-Golem armor set that grants melee damage and defensive bonuses. It is the final melee armor set available on the Old-gen console version Old-gen console version and Nintendo Nintendo 3DS version version. On the Desktop version Desktop version, Console version Console version, and Mobile version Mobile version, it is the penultimate melee armor set, followed by Solar Flare armor.

The set consists of the Beetle Helmet and Beetle Leggings, as well as two different chestpiece variants: the Beetle Scale Mail and Beetle Shell.

Crafting the full set while wearing either the Beetle Scale Mail or Beetle Shell grants a different set bonus: wearing the Beetle Scale Mail enhances damage output and grants the Beetle Might buff, whereas the Beetle Shell provides more defense and can grant the Beetle Endurance buff.

<a className='font-bold underline'>Crafting the full set with one chest piece requires 18 Beetle Husks and a full set of Turtle armor (54 Chlorophyte Bars (or  270 /  324 pieces of Chlorophyte Ore), and 3 Turtle Shells). Crafting all four pieces from scratch requires 26 Beetle Husks, 78 Chlorophyte Bars (or  390 /  468 pieces of Chlorophyte Ore), and 4 Turtle Shells.</a></h1>    
      <div className='flex'>
        <div className=''>
          <h1 className='font-bold' >Crafting</h1>
          <div className='flex'>
              <div className=' p-2'>
                  <h1 className='' >Result</h1>
                  <div className='border h-20 p-1'>
                    <div className='flex'>
                        <img className='' src='https://terraria.wiki.gg/images/0/00/Beetle_Helmet.png'/> <h1 className=' ml-2 font-bold' >Beetle Helmet</h1>
                    </div>
                  </div>
                  <div className='border h-20 p-1'>
                    <div className='flex'>
                        <img className='' src='https://terraria.wiki.gg/images/0/0a/Beetle_Leggings.png'/> <h1 className=' ml-2 font-bold' >Beetle Leggings</h1>
                    </div>
                  </div>
                  <div className='border h-20 p-1'>
                    <div className='flex'>
                        <img className='' src='https://terraria.wiki.gg/images/6/64/Beetle_Scale_Mail.png'/> <h1 className=' ml-2 font-bold' >Beetle Scale Mail</h1>
                    </div>
                  </div>
                  <div className='border h-20 p-1'>
                    <div className='flex'>
                        <img className='' src='https://terraria.wiki.gg/images/a/a2/Beetle_Shell.png'/> <h1 className=' ml-2 font-bold' >Beetle Shell</h1>
                    </div>
                  </div>
              </div>   
              <div className=' p-2'>
                  <h1 className='' >Ingridients</h1>
                  <div className='border h-20 p-1'>
                    <div className='flex mt-2' >
                        <img className='' src='https://terraria.wiki.gg/images/c/cb/Beetle_Husk.png'/> <h1 className='ml-1 text-sm ' >Beetle Husk</h1><h1 className='ml-1 text-sm text-white/75'>x4</h1>
                    </div>
                    <div className='flex mt-2' >
                        <img className='' src='https://terraria.wiki.gg/images/9/92/Turtle_Helmet.png'/> <h1 className='ml-1 text-sm ' >Turtle Helmet</h1>
                    </div>
                  </div>
                  <div className='border h-20'>
                    <div className='flex mt-2' >
                            <img className='' src='https://terraria.wiki.gg/images/c/cb/Beetle_Husk.png'/> <h1 className='ml-1 text-sm ' >Beetle Husk</h1><h1 className='ml-1 text-sm text-white/75'>x6</h1>
                        </div>
                        <div className='flex mt-2' >
                            <img className='' src='https://terraria.wiki.gg/images/c/c9/Turtle_Leggings.png'/> <h1 className='ml-1 text-sm ' >Turtle Leggings</h1>
                        </div>
                  </div>
                  <div className='border h-20'>
                    <div className='flex mt-2' >
                            <img className='' src='https://terraria.wiki.gg/images/c/cb/Beetle_Husk.png'/> <h1 className='ml-1 text-sm ' >Beetle Husk</h1><h1 className='ml-1 text-sm text-white/75'>x8</h1>
                        </div>
                        <div className='flex mt-2' >
                            <img className='' src='https://terraria.wiki.gg/images/9/92/Turtle_Scale_Mail.png'/> <h1 className='ml-1 text-sm ' >Turtle Scale Mail</h1>
                        </div>
                  </div>
                  <div className='border h-20'>
                    <div className='flex mt-2' >
                            <img className='' src='https://terraria.wiki.gg/images/c/cb/Beetle_Husk.png'/> <h1 className='ml-1 text-sm ' >Beetle Husk</h1><h1 className='ml-1 text-sm text-white/75'>x8</h1>
                        </div>
                        <div className='flex mt-2' >
                            <img className='' src='https://terraria.wiki.gg/images/9/92/Turtle_Scale_Mail.png'/> <h1 className='ml-1 text-sm ' >Turtle Scale Mail</h1>
                        </div>
                  </div>
              </div>
              <div className=' p-2'>
                  <h1 className='' >Crafting station</h1> 
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/3/3d/Mythril_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2   hover:text-blue-500 duration-200 ' >Mythril Anvil</Link>
                  </div>
                  <div className='flex' >
                      <img className='w-8 h-4' src='https://terraria.wiki.gg/images/d/dc/Orichalcum_Anvil.png'/> <Link to='/wiki/items/hardModeAnvils' className='text-base ml-2  hover:text-blue-500 duration-200 ' >Orichalcum Anvil</Link>
                  </div>
              </div>
          </div>
        </div>
        <div className='ml-7 max-w-72'>
            <div>
                <h1 className='font-bold'>Notes</h1>
            </div>
            <div>
                <h1 className='flex'>With <img className='h-6 w-7' src='https://terraria.wiki.gg/images/6/64/Beetle_Scale_Mail.png'/> Beetle ScaleMail:</h1>
        <div className='ml-3'>
            <h1>+61 defense</h1>
            <h1>+8% melee critical hit chance</h1>
            <h1>+14% melee damage</h1>
            <h1>+12% melee speed</h1>
            <h1>+12% movement speed</h1>
            <h1>+500 aggro, with the Helmet and Leggings both adding 250.</h1>
        </div>
                <h1 className='mt-3 flex'>With <img className='h-6 w-7' src='https://terraria.wiki.gg/images/a/a2/Beetle_Shell.png'/>  Beetle Shell:</h1>
          <div className='ml-3'>
            <h1>+73 defense</h1>
            <h1>+5% melee critical hit chance</h1>
            <h1>+11% melee damage</h1>
            <h1>+6% melee speed</h1>
            <h1>+6% movement speed</h1>
            <h1>+900 aggro, with the Helmet, Shell, and Leggings adding 250, 400, and 250, respectively.</h1>
        </div>
            </div>
        </div>
      </div>
    </div>
  )
}
          

