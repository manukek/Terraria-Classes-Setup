import styles from '../../../../css/App.module.scss'

export const WormScarf = () => {
  return (
    <div className={styles.main}>
        <h1 className="p-2 border border-gray-600  rounded-md bg-[#101017]"><a className='font-bold'>The Worm Scarf </a>is a pre-Hardmode accessory that reduces incoming damage by 17%. This damage reduction from this item is calculated after defense is applied:

Damage taken = ( Raw damage - (Defense * (0.5 or 0.75 or 1 for Classic/Expert/Master Mode, respectively)) ) * (1 - .17)

<a className='font-bold underline'>The Worm Scarf is always dropped from the Eater of Worlds Treasure Bag in Expert Mode.</a></h1>
    </div>
  )
}