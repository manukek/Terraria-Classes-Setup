import { Link } from "react-router-dom"


export const PreLunarEventsAcs = () => {
  return (
    <div>
        <div className='ml-3 mt-11'>
                <div className='border border-gray-600 rounded-lg p-3 mt-3 bg-[#101017] '>
                    <h1 className="font-bold" >Mixed Accessories:</h1>
                    <div className='p-2' > 
                      <div className='flex mt-2'>
                         <img src='/Shield_of_Cthulhu.webp'/> <Link to='/acs/ShieldOfCthulhu' className='ml-1  hover:underline hover:text-blue-500 duration-200' >Shield of Cthulhu</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Lightning_Boots.webp' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/LightningBoots'}>Lightning Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Terraspark_Boots.webp' /> <Link className='h-6  hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/TerrasparkBoots'}>Terraspark Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Ankh_Shield.webp' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/AnkhShied'}>Ankh Shied</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Avenger_Emblem.webp' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/AvangerEmblem'}>Avanger Emblem</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Destroyer_Emblem.webp' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/DestroyerEmblem'}>Destroyer Emblem</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Flame_Wings.webp' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/FlameWings'}>Flame Wings</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Celestial_Stone.webp' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/CelestialStone'}>Celestial Stone</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Celestial_Shell.webp' /> <Link className='h-6   hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/CelestialShell'}>Celestial Shell</Link>
                      </div>
                    </div>
                  </div>
              </div>
    </div>
  )
}

