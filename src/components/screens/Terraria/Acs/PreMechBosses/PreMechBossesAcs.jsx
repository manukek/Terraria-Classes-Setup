import { Link } from "react-router-dom"


export const PreMechBossesAcs = () => {
  return (
    <div>
        <div className='ml-3 '>
                <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] mt-3 '>
                    <h1 className="font-bold" >Mixed Accessories:</h1>
                    <div className='p-2' > 
                      <div className='flex mt-2'>
                         <img src='/Shield_of_Cthulhu.webp'/> <Link to='/acs/ShieldOfCthulhu' className='ml-1 hover:underline hover:text-blue-500 duration-200 ' >Shield of Cthulhu</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Lightning_Boots.webp' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/LightningBoots'}>Lightning Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Terraspark_Boots.webp' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/TerrasparkBoots'}>Terraspark Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Ankh_Shield.webp' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/AnkhShied'}>Ankh Shied</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Frozen_Wings.webp' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/FrozenWings'}>Frozen Wings</Link>
                      </div>
                    </div>
                  </div>
              </div>
    </div>
  )
}
