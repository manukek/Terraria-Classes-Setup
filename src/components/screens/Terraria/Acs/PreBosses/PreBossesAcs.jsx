import { Link } from "react-router-dom"


export const PreBossesAcs = () => {
  return (
    <div>
        <div className='ml-3 mt-8'>
                <div className='border border-gray-600 rounded-lg p-3 bg-[#101017]  mt-3 '>
                    <h1 className="font-bold" >Mixed Accessories:</h1>
                    <div className='p-2' > 
                      <div className='flex '>
                      <img className='' src='/Hermes_Boots.webp'/> <Link to='/acs/HermesBoots'  className='ml-1 hover:underline hover:text-blue-500 duration-200' >Hermes Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                      <img src='/Lightning_Boots.webp'/> <Link to='/acs/LightningBoots' className='flex hover:underline hover:text-blue-500 duration-200 ml-2' >Lightning Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Magiluminescence.webp' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/Magiluminescence'}>Magiluminescence</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Cloud_in_a_Bottle.webp' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/CloudInABottle'}>Cloud in a Bottle</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Band_of_Regeneration.webp' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/BandOfRegeneration'}>Band of Regeneration</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Shark_Tooth_Necklace.webp' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/SharkToothNecklace'}>Shark Tooth Necklace</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='/Fledgling_Wings.webp' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/FledglingWings'}>Fledgling Wings</Link>
                      </div>
                    </div>
                  </div>
              </div>
    </div>
  )
}
