import styles from '../../../css/App.module.scss'
import { Link } from 'react-router-dom'

export const MeleeMain = () => {
  return (
    <div className={styles.mainMelee}>
      <h1>
      <a className="font-bold">The melee class</a> is powerful, sporting high defense and damage as well as decent crowd control. 
        It utilizes weapons such as swords, spears, sickles, boomerangs, flails, and yoyos. 
        Many melee weapons have a short attack range, and those that are viable at a distance tend to do lower damage than their close-range counterparts. 
        Melee users are good at taking lots of hits without losing lots of health, which helps with tougher enemies and Bosses. 
        Melee is generally the most straight-forward class, 
        as using the weapons and dealing decent damage with them doesnt require any help.
      </h1>
      <div className="flex justify-start" >
        <img className="mt-3 mr-3" src='https://terraria.wiki.gg/images/f/f9/Solar_Flare_armor.png'/>
        <img className="mt-1" src={'https://terraria.wiki.gg/images/6/66/Zenith.png'}/>
      </div>
      <div>
        <h1 className='text-2xl mb-2 mt-2'>Guide</h1>
      </div>
      <div className='flex bg-slate-300 border border-slate-400 '>
          <div>
            <div className='ml-2 p-2'>
              <h1 className='text-xl'>Pre Bosses</h1>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 '>
                <h1 className='mb-2 font-bold' >Weapons:</h1>
                <div className='flex'>
                  <img className='w-12 h-12' src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <Link className='h-6 mt-3' to={'/meleeWeapons/bladeofgrass'}><h1 className='ml-1 text-blue-500 hover:underline'>Blade of grass</h1></Link>
                </div>
                <div className='flex'>
                  <img className='w-12 h-12' src='https://terraria.wiki.gg/images/2/2d/Starfury.png'/> <Link className='h-6 mt-3' to={'/meleeWeapons/starfury'}><h1 className='ml-1 text-blue-500 hover:underline'>Starfury</h1></Link>
                </div>
              </div>
                <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                  <h1>Armor:</h1>
                  <div className='flex'>
                    <img className='w-7 h-12' src='https://terraria.wiki.gg/images/9/94/Platinum_armor.png' /> <Link className='h-6 mt-3' to={'/meleeArmor/platinumArmor'}><h1 className='ml-1 text-blue-500 hover:underline'>Platinum armor</h1></Link>
                  </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                  <h1>Buffs:</h1>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='ml-1 text-blue-500 hover:underline'>Sharpening Station</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-1 text-blue-500 hover:underline'>Wrath Potion</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-1 text-blue-500 hover:underline'>Rage Potion</h1></Link>
                  </div>
              </div>
            </div>
          </div>
          <div className='ml-3'>
            <div>
              <h1 className='text-xl my-2'>Pre Hardmode</h1>
            </div>  
            <div className='ml-2 '>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 '>
                <h1 >Weapons:</h1>
                <div className='flex'>
                  <img className='w-12 h-12' src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <Link className='h-6 mt-2' to={'/meleeWeapons/nightsEdge'}><h1 className='ml-1 text-blue-500 hover:underline'>Nights Edge </h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Armor:</h1>
                <div className='flex'>
                  <img className='w-7 h-12' src='https://terraria.wiki.gg/images/f/f1/Molten_armor.png' /> <Link className='h-6 mt-2' to={'/meleeArmor/moltenArmor'}><h1 className='ml-1 text-blue-500 hover:underline'>Molten armor</h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                  <h1>Buffs:</h1>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='ml-1 text-blue-500 hover:underline'>Sharpening Station</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-1 text-blue-500 hover:underline'>Wrath Potion</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-1 text-blue-500 hover:underline'>Rage Potion</h1></Link>
                  </div>
              </div>
            </div>
          </div>
          <div className='ml-3'>
            <div>
              <h1 className='text-xl my-2'>Pre-Mech Bosses</h1>
            </div>  
            <div className='ml-2'>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Weapons:</h1>
                <div className='flex'>
                  <img className='w-12 h-12' src='https://terraria.wiki.gg/images/e/ea/Ice_Sickle.png'/> <Link className='h-6 mt-2' to={'/meleeWeapons/iceSickle'}><h1 className=' text-blue-500 hover:underline'>Ice Sickle </h1></Link>
                </div>
                <div className='flex'>
                  <img  src='https://terraria.wiki.gg/images/d/d2/Shadowflame_Knife.png'/> <Link className='h-6 mt-2' to={'/meleeWeapons/shadowflameKnife'}><h1 className=' text-blue-500 hover:underline'>Shadowflame Knife </h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Armor:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/2/24/Titanium_armor_%28old%29.png' /> <Link className='h-6 mt-2' to={'/meleeArmor/titanumArmor'}><h1 className=' text-blue-500 hover:underline'>Titanium armor</h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Buffs:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/f/f6/Sake.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/sake'}><h1 className=' text-blue-500 hover:underline'>Sake</h1></Link>
                </div>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/7/71/Flask_of_Ichor.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/ichor'}><h1 className=' text-blue-500 hover:underline'>Ichor</h1></Link>
                  <h1 className='mt-3 mx-2'>or</h1>
                  <img src='https://terraria.wiki.gg/images/0/08/Flask_of_Cursed_Flames.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/cursedFlames'}><h1 className=' text-blue-500 hover:underline'>Cursed flames</h1></Link>
                </div>
                  <div className='flex'>
                    <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='ml-1 text-blue-500 hover:underline'>Sharpening Station</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/d/d7/Wrath_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-1 text-blue-500 hover:underline'>Wrath Potion</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img src='https://terraria.wiki.gg/images/e/ec/Rage_Potion.png' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-1 text-blue-500 hover:underline'>Rage Potion</h1></Link>
                  </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-slate-100 mt-3'>
                <h1>Accessories:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/d/d7/Warrior_Emblem.png' /> <Link className='h-6 mt-2' to={'/meleeAcs/warriorEmblem'}><h1 className=' text-blue-500 hover:underline'>Warrior Emblem</h1></Link>
                </div>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/0/05/Berserker%27s_Glove.png' /> <Link className='h-6 mt-2' to={'/meleeAcs/berserkerGlove'}><h1 className=' text-blue-500 hover:underline'>Berserker glove</h1></Link>
                </div>
              </div>
            </div>
          </div>
      </div>  
    </div>  
  )
}
