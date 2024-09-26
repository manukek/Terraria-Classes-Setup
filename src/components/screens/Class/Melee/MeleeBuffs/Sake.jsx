import styles from '../../../../css/App.module.scss'

export const Sake = () => {
  return (
    <div className={styles.main}>
        <h1 className='p-2 border border-gray-600  rounded-md bg-[#101017]' >Sake is a potion that grants the Tipsy debuff when consumed, which increases many of the players stats but lowers the players defense for four minutes, twice the duration of Ale. <a className='font-bold underline'>Sake can be purchased from the Traveling Merchant for 5</a>.

The Tipsy debuff has the following effects:This content is transcluded from Tipsy.
-4 defense
+2% critical hit on melee attacks
+10% melee attack speed
+10% melee damage
 +5 Fishing Power</h1>
    </div>
  )
}
