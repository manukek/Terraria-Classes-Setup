import { Link } from "react-router-dom"
import styles from '../../../../../css/App.module.scss'
import { PreHardModeAcs } from "../../../Acs/PreHardMode/PreHardModeAcs"


export const SumPreHardmode = () => {
  return (
    <div className={styles.main}>
        <div className='ml-3 flex'>
          <div>
          <div className='flex'>
                  <h1 className='text-xl my-2'>Pre Hard Mode</h1>
                  <div className='bg-[#004cc6] w-4 h-6 ml-2 mt-3'></div>
                </div>  
            <div className='ml-2 w-72'>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] '> 
                <h1 className="font-bold">Weapons:</h1>
                  <div className='flex'>
                    <img className='' src='/Spinal_Tap.webp'/> <Link className='h-6' to={'/sum/SpinalTap'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Spinal Tap</h1></Link>
                  </div>
                  <div className='flex mt-2'>
                    <img className='' src='/Imp_Staff.webp'/> <Link className='h-6' to={'/sum/ImpStaff'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Imp Staff</h1></Link>
                  </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3  bg-[#101017] mt-3'>
                <h1 className="font-bold">Armor:</h1>
                <div className='flex'>
                  <img className='w-7 h-12' src='/Obsidian_armor.webp' /> <Link className='h-6 mt-2' to={'/sum/ObsidianArmor'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Obsidian armor</h1></Link>
                </div>
              </div>
              <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-3'>
                    <h1 className="font-bold" >Buffs:</h1>
                    <div className='flex'>
                      <img src='/Sharpening_Station.webp' /> <Link className='h-6' to={'/meleeBafs/sharpeningStation'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Sharpening Station</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='/Wrath_Potion.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/wrathPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Wrath Potion</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='/Rage_Potion.webp' /> <Link className='h-6 mt-2' to={'/meleeBafs/rage'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Rage Potion</h1></Link>
                    </div>
                    <div className='flex mt-2'>
                      <img src='/Summoning_Potion.webp' /> <Link className='h-6 mt-2' to={'/sum/SummoningPotion'}><h1 className='ml-1 hover:underline hover:text-blue-500 duration-200'>Summoning Potion</h1></Link>
                    </div>
                </div>
            </div>
            </div>
            <div className="mt-3">
              <PreHardModeAcs/>
            </div>
            <div className='border border-gray-600 rounded-lg p-3 bg-[#101017] mt-11 ml-3  h-44'>
              <h1 className='mb-2 font-bold' >Summoner Accessories:</h1>
              <div>
                <div className="flex">
                  <img src="/Feral_Claws.webp"/><Link className="ml-2  hover:underline hover:text-blue-500 duration-200" to='/sum/FeralClaws' >Feral Claws</Link >
                </div>
                <div className="flex mt-3">
                  <img src="/Pygmy_Necklace.webp"/><Link className="ml-2  hover:underline hover:text-blue-500 duration-200" to='/sum/PygmyNecklace' >Pygmy Necklace</Link >
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
