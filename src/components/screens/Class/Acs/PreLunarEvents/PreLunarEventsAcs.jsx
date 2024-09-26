import { Link } from "react-router-dom"


export const PreLunarEventsAcs = () => {
  return (
    <div>
        <div className='ml-3 mt-11'>
                <div className='border border-gray-600 rounded-lg p-3 mt-3 bg-[#101017] '>
                    <h1 className="font-bold" >Mixed Accessories:</h1>
                    <div className='p-2' > 
                      <div className='flex mt-2'>
                         <img src='https://terraria.wiki.gg/images/5/54/Shield_of_Cthulhu.png'/> <Link to='/acs/ShieldOfCthulhu' className='ml-1  hover:underline hover:text-blue-500 duration-200' >Shield of Cthulhu</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/2/2c/Lightning_Boots.png' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/LightningBoots'}>Lightning Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/b/ba/Terraspark_Boots.png' /> <Link className='h-6  hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/TerrasparkBoots'}>Terraspark Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/9/99/Ankh_Shield.png' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/AnkhShied'}>Ankh Shied</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/c/c3/Avenger_Emblem.png' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/AvangerEmblem'}>Avanger Emblem</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/5/5a/Destroyer_Emblem.png' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/DestroyerEmblem'}>Destroyer Emblem</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/b/bf/Flame_Wings.png' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/FlameWings'}>Flame Wings</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/c/c5/Celestial_Stone.png' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/CelestialStone'}>Celestial Stone</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/e/ee/Celestial_Shell.png' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/CelestialShell'}>Celestial Shell</Link>
                      </div>
                    </div>
                  </div>
              </div>
    </div>
  )
}

