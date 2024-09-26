import styles from '../../../../css/App.module.scss'

export const SharpeningStation = () => {
  return (
    <div className={styles.main} >
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' ><a className='font-bold'>The Sharpening Station</a> is a furniture item found naturally <a className='font-bold underline'>generated in Underground Cabins in the Underground Jungle</a>. In Hardmode, it is also sold by the Merchant for 10 gold.

Placing and pressing Open / Activate on the Sharpening Station grants the Sharpened buff, which increases armor penetration while holding a melee weapon by 12. This lasts until the player dies or leaves the world, but can be canceled at any time by right-clicking the icon (Desktop version), by selecting the icon using Cycle Next/Previous Buff and then pressing Remove Buff (Console version), or by double-tapping the buff icon (Mobile version).

Unlike equipment buff items, the Sharpening Station must be placed in order to activate the buff. It can be mined with a pickaxe or drill and picked up again, even while the buff is active, which will not cancel the buff. Placement is only dependent on an adequate space of 3×2 tiles being available.</h1>
    </div>
  )
}
