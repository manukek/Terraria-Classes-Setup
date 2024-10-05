import { Link } from "react-router-dom"


export const PreHardModeAcs = () => {
  return (
    <div>
        <div className='ml-3 mt-8'>
                <div className='border border-gray-600 rounded-lg p-3  bg-[#101017]  mt-3 '>
                    <h1 className="font-bold" >Mixed Accessories:</h1>
                    <div className='p-2' > 
                      <div className='flex '>
                        <img className='' src='https://terraria.wiki.gg/images/1/12/Brain_of_Confusion.png'/> <Link to='/acs/BrainOfConfusion'  className='ml-1 hover:underline hover:text-blue-500 duration-200 ' >Brain of Confusion</Link>
                      </div>
                      <div className='flex mt-2'>
                         <img src='https://terraria.wiki.gg/images/5/54/Shield_of_Cthulhu.png'/> <Link to='/acs/ShieldOfCthulhu' className='ml-1 hover:underline hover:text-blue-500 duration-200 ' >Shield of Cthulhu</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img className="h-7"  src='https://terraria.wiki.gg/images/e/e4/Worm_Scarf.png' /> <Link to='/acs/WormScarf' className='h-6  hover:underline hover:text-blue-500 duration-200 ml-2'>Worm Scarf</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/2/2c/Lightning_Boots.png' /> <Link className='h-6  hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/LightningBoots'}>Lightning Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/b/ba/Terraspark_Boots.png' /> <Link className='h-6 hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/TerrasparkBoots'}>Terraspark Boots</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/4/4a/Shark_Tooth_Necklace.png' /> <Link className='h-6  hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/SharkToothNecklace'}>Shark Tooth Necklace</Link>
                      </div>
                      <div className='flex mt-2'>
                        <img  src='https://terraria.wiki.gg/images/e/e0/Fledgling_Wings.png' /> <Link className='h-6  hover:underline hover:text-blue-500 duration-200 ml-2' to={'/acs/FledglingWings'}>Fledgling Wings</Link>
                      </div>
                    </div>
                  </div>
              </div>
    </div>
  )
}
