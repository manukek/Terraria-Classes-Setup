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
      <div className='flex'>
          <div>
            <div>
              <h1 className='text-xl my-2'>Pre Bosses</h1>
            </div>  
            <div className='ml-2'>
              <h1>Weapons:</h1>
              <div className='flex'>
                <img  src='https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png'/> <Link to={'/meleeWeapons/bladeofgrass'}><h1 className='mt-5 text-blue-500 hover:underline'>Blade of grass</h1></Link>
              </div>
              <div className='flex'>
                <img  src='https://terraria.wiki.gg/images/2/2d/Starfury.png'/> <Link to={'/meleeWeapons/starfury'}><h1 className='mt-3 text-blue-500 hover:underline'>Starfury</h1></Link>
              </div>
              <div>
                <h1>Armor:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/9/94/Platinum_armor.png' /> <Link to={'/meleeArmor/platinumArmor'}><h1 className='mt-3 text-blue-500 hover:underline'>Platinum armor</h1></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='ml-3'>
            <div>
              <h1 className='text-xl my-2'>Pre Hardmode</h1>
            </div>  
            <div className='ml-2'>
              <h1>Weapons:</h1>
              <div className='flex'>
                <img  src='https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png'/> <Link to={'/meleeWeapons/nightsEdge'}><h1 className='mt-5 text-blue-500 hover:underline'>Nights Edge </h1></Link>
              </div>
              <div>
                <h1>Armor:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/f/f1/Molten_armor.png' /> <Link to={'/meleeArmor/moltenArmor'}><h1 className='mt-3 text-blue-500 hover:underline'>Molten armor</h1></Link>
                </div>
              </div>
              <div>
                <h1>Buffs:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link to={'/meleeBafs/sharpeningStation'}><h1 className='text-blue-500 hover:underline'>Sharpening Station</h1></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='ml-3'>
            <div>
              <h1 className='text-xl my-2'>Pre-Mech Bosses</h1>
            </div>  
            <div className='ml-2'>
              <h1>Weapons:</h1>
              <div className='flex'>
                <img  src='https://terraria.wiki.gg/images/e/ea/Ice_Sickle.png'/> <Link to={'/meleeWeapons/iceSickle'}><h1 className='mt-5 text-blue-500 hover:underline'>Ice Sickle </h1></Link>
              </div>
              <div className='flex'>
                <img  src='https://terraria.wiki.gg/images/d/d2/Shadowflame_Knife.png'/> <Link to={'/meleeWeapons/shadowflameKnife'}><h1 className='mt-5 text-blue-500 hover:underline'>Shadowflame Knife </h1></Link>
              </div>
              <div>
                <h1>Armor:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/2/24/Titanium_armor_%28old%29.png' /> <Link to={'/meleeArmor/titanumArmor'}><h1 className='mt-3 text-blue-500 hover:underline'>Titanium armor</h1></Link>
                </div>
              </div>
              <div>
                <h1>Buffs:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/3/3b/Sharpening_Station.png' /> <Link to={'/meleeBaffs/sharpeningStation'}><h1 className='text-blue-500 hover:underline'>Sharpening Station</h1></Link>
                </div>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/f/f6/Sake.png' /> <Link to={'/meleeBafs/sake'}><h1 className='mt-3 text-blue-500 hover:underline'>Sake</h1></Link>
                </div>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/7/71/Flask_of_Ichor.png' /> <Link to={'/meleeBafs/ichor'}><h1 className='mt-3 text-blue-500 hover:underline'>Ichor</h1></Link>
                  <h1 className='mt-3 mx-2'>or</h1>
                  <img src='https://terraria.wiki.gg/images/0/08/Flask_of_Cursed_Flames.png' /> <Link to={'/meleeBafs/cursedFlames'}><h1 className='mt-3 text-blue-500 hover:underline'>Cursed flames</h1></Link>
                </div>
              </div>
              <div>
                <h1>Accessories:</h1>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/d/d7/Warrior_Emblem.png' /> <Link to={'/meleeAcs/warriorEmblem'}><h1 className=' text-blue-500 hover:underline'>Warrior Emblem</h1></Link>
                </div>
                <div className='flex'>
                  <img src='https://terraria.wiki.gg/images/0/05/Berserker%27s_Glove.png' /> <Link to={'/meleeAcs/berserkerGlove'}><h1 className='mt-3 text-blue-500 hover:underline'>Berserker glove</h1></Link>
                </div>
              </div>
            </div>
          </div>
      </div>  
    </div>  
  )
}
