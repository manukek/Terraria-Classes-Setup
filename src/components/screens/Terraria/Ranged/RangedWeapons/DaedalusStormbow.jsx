
import styles from '../../../../css/App.module.scss'

export const DaedalusStormbow = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold  '>The Daedalus Stormbow</a> is a Hardmode bow which rains arrows down from the sky, instead of firing them from the bow itself. Each shot fires three arrows with an additional 1/3 (33.33%) chance to spawn one extra arrow (one less arrow while using Holy, Unholy, Hellfire, or Jesters Arrows), while only consuming a single arrow from the players inventory. The arrows fall in a wide spread towards the area where the cursor was pointed. The Daedalus Stormbow has a 1/4 (25%) chance of being dropped by Hallowed Mimics.

Its best modifier is Unreal.</h1>    
      <div>
        {/* used in */}
        <h1 className='font-bold my-2 py-1 w-3/6 text-center border border-gray-600  rounded-md bg-[#101017] mt-5'>Obtained from</h1>
        <div className='border border-gray-600 rounded-md p-2 w-3/6 h-50 bg-[#101017]'>
          <div className='flex'>
            <img src='/Hallowed_Mimic.webp'/><h1 className='mt-3 ml-2'>Hallowed Mimic</h1>        
          </div>
        </div>
      </div>
    </div>
  )
}
          


         