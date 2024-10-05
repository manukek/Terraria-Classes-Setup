import { Link } from "react-router-dom"


export const PreMechBossesAcs = () => {
  return (
    <div>
        <div className='ml-3 '>
                <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] mt-3 '>
                    <h1 className="font-bold" >Mixed Accessories:</h1>
                    <div className='p-2' > 
                      <div className='flex mt-2'>
                         <img src='https://terraria.wiki.gg/images/5/54/Shield_of_Cthulhu.png'/> <Link to='/acs/ShieldOfCthulhu' className='ml-1 hover:underline hover:text-blue-500 duration-200 ' >Shield of Cthulhu</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/2/2c/Lightning_Boots.png' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/LightningBoots'}>Lightning Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/b/ba/Terraspark_Boots.png' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/TerrasparkBoots'}>Terraspark Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/9/99/Ankh_Shield.png' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/AnkhShied'}>Ankh Shied</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/6/6d/Frozen_Wings.png' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/FrozenWings'}>Frozen Wings</Link>
                      </div>
                    </div>
                  </div>
              </div>
    </div>
  )
}
