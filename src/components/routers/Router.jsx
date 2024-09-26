import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { ErrorNotFound } from "../../assets/Errors/ErrorNotFound"
import { Classes } from "../screens/ClassesMain"
import { MeleeMain } from '../screens/Class/Melee/MeleeMain'
import { Mage } from '../screens/Class/Mage/Mage'
import { Summoner } from '../screens/Class/Summoner/Summoner'
import { Starfury } from "../screens/Class/Melee/MeleeWeapons/Starfury"
import { BladeOfGrass } from '../screens/Class/Melee/MeleeWeapons/BladeOfGrass'
import { PlatinumArmor } from "../screens/Class/Melee/MeleeArmor/PlatinumArmor"
import { MoltenArmor } from "../screens/Class/Melee/MeleeArmor/MoltenArmor"
import { NightsEdge } from '../screens/Class/Melee/MeleeWeapons/NightsEdge'
import { SharpeningStation } from "../screens/Class/Melee/MeleeBuffs/SharpeningStation"
import { IceSickle } from "../screens/Class/Melee/MeleeWeapons/IceSickle"
import { ShadowflameKnife } from "../screens/Class/Melee/MeleeWeapons/ShadowflameKnife"
import { TitaniumArmor } from "../screens/Class/Melee/MeleeArmor/TitaniumArmor"
import { Sake } from "../screens/Class/Melee/MeleeBuffs/Sake"
import { Ichor } from "../screens/Class/Melee/MeleeBuffs/Ichor"
import { CursedFlames } from "../screens/Class/Melee/MeleeBuffs/CursedFlames"
import { WarriorEmblem } from "../screens/Class/Melee/MeleeAcs/WarriorEmblem"
import { BerserkerGlove } from "../screens/Class/Melee/MeleeAcs/BerserkerGlove"
import { WrathPotion } from "../screens/Class/Melee/MeleeBuffs/WrathPotion"
import { Zenith } from "../screens/Class/Melee/MeleeWeapons/Zenith"
import { Rage } from "../screens/Class/Melee/MeleeBuffs/Rage"
import { HardModeAnvils } from "../screens/Wiki/Items/HardMode/From_underbroundHard/HardModeAnvils"
import { Jungle_Spores } from "../screens/Wiki/Items/PreHardMode/From_mobs/Jungle_Spores"
import { Stingers } from "../screens/Wiki/Items/PreHardMode/From_mobs/Stingers"
import { Vine } from "../screens/Wiki/Items/PreHardMode/From_mobs/Vine"
import { PreHardModeAnvils } from "../screens/Wiki/Items/PreHardMode/From_underground/PreHardModeAnvils"
import { IronBar } from "../screens/Wiki/Items/PreHardMode/From_underground/Bars/IronBar"
import { LeadBar } from "../screens/Wiki/Items/PreHardMode/From_underground/Bars/LeadBar"
import { Muramasa } from '../screens/Class/Melee/MeleeWeapons/CraftWeapons/Muramasa'
import { LightsBane } from '../screens/Class/Melee/MeleeWeapons/CraftWeapons/LightsBane'
import { Volcano } from '../screens/Class/Melee/MeleeWeapons/CraftWeapons/Volcano'
import { TrueNightsEdge } from "../screens/Class/Melee/MeleeWeapons/TrueNightsEdge"
import { MeleePreBosses } from "../screens/Class/Melee/GuideMelee/Pre-bosses(melee)/MeleePreBosses"
import { MeleePreHardMode } from "../screens/Class/Melee/GuideMelee/Pre-hardmode(melee)/MeleePreHardMode"
import { MeleePreMechBosses } from "../screens/Class/Melee/GuideMelee/Pre-MechBosses(melee)/MeleePreMechBosses"
import { MeleePrePlantera } from "../screens/Class/Melee/GuideMelee/Pre-plantera(melee)/MeleePrePlantera"
import { MeleePreGolem } from "../screens/Class/Melee/GuideMelee/Pre-Golem(melee)/MeleePreGolem"
import { MeleePreLunarEvents } from "../screens/Class/Melee/GuideMelee/Pre-LunarEvents(melee)/MeleePreLunarEvents"
import { MeleePreMoonLord } from '../screens/Class/Melee/GuideMelee/Pre-Moon-Lord(melee)/MeleePreMoonLord'
import { Excalibur } from "../screens/Class/Melee/MeleeWeapons/Excalibur"
import { TurtleArmor } from "../screens/Class/Melee/MeleeArmor/TurtleArmor"
import { FireGauntlet } from "../screens/Class/Melee/MeleeAcs/FireGauntlet"
import { HermesBoots } from "../screens/Class/Acs/PreBosses/HermesBoots"
import { RocketBoots } from "../screens/Class/Acs/Crafting/RocketBoots"
import { SpectreBoots } from "../screens/Class/Acs/Crafting/SpectreBoots"
import { LightningBoots } from "../screens/Class/Acs/PreBosses/LightningBoots"
import { FrostsparkBoots } from "../screens/Class/Acs/Crafting/FrostsparkBoots"
import { LavaWaders } from "../screens/Class/Acs/Crafting/LavaWaders"
import { ObsidianWaterWalkingBoots } from "../screens/Class/Acs/Crafting/ObsidianWaterWalkingBoots"
import { Magiluminescence } from "../screens/Class/Acs/PreBosses/Magiluminescence"
import { CloudInABottle } from "../screens/Class/Acs/PreBosses/CloudInABottle"
import { BandOfRegeneration } from "../screens/Class/Acs/PreBosses/BandOfRegeneration"
import { SharkToothNecklace } from "../screens/Class/Acs/PreBosses/SharkToothNecklace"
import { FledglingWings } from "../screens/Class/Acs/PreBosses/FledglingWings"
import { TerraBlade } from "../screens/Class/Melee/MeleeWeapons/TerraBlade"
import { TrueExcalibur } from "../screens/Class/Melee/MeleeWeapons/TrueExcalibut"
import { BeetleArmor } from "../screens/Class/Melee/MeleeArmor/BeetleArmor"
import { TerrasparkBoots } from "../screens/Class/Acs/PreHardMode/TerrasparkBoots"
import { BrainOfConfusion } from "../screens/Class/Acs/PreHardMode/BrainOfConfusion"
import { ShieldOfCthulhu } from "../screens/Class/Acs/PreHardMode/ShieldOfCthulhu"
import { WormScarf } from "../screens/Class/Acs/PreHardMode/WormScarf"
import { AnkhShied } from "../screens/Class/Acs/PreMechBosses/AnkhShied"
import { FrozenWings } from "../screens/Class/Acs/PreMechBosses/FrozenWings"
import { AvangerEmblem } from "../screens/Class/Acs/PrePlantera/AvangerEmblem"
import { FlameWings } from "../screens/Class/Acs/PrePlantera/FlameWings"
import { MoonStone } from "../screens/Class/Acs/PreGolem/MoonStone"
import { CelestialStone } from "../screens/Class/Acs/PreLunarEvents/CelestialStone"
import { CelestialShell } from "../screens/Class/Acs/PreLunarEvents/CelestialShell"
import { MoonShell } from "../screens/Class/Acs/PreLunarEvents/MoonShell"
import { DestroyerEmblem } from "../screens/Class/Acs/PreLunarEvents/DestroyerEmblem"
import { SolarEruption } from "../screens/Class/Melee/MeleeWeapons/SolarEruption"
import { Daybreak } from "../screens/Class/Melee/MeleeWeapons/Daybreak"
import { Test } from "../../tests/Test"
import { RangedMain } from "../screens/Class/Ranged/RangedMain"
import { RangedPreBosses } from "../screens/Class/Ranged/GuideRanged/Pre-bosses(ranged)/RangedPreBosses"
import { RangedPreHardMode } from "../screens/Class/Ranged/GuideRanged/Pre-hardmode(ranged)/RangedPreHardMode"
import { RangedPreMechBosses } from "../screens/Class/Ranged/GuideRanged/Pre-mechbosses(ranged)/RangedPreMechBosses"
import { RangedreGolem } from "../screens/Class/Ranged/GuideRanged/Pre-golem(ranged)/RangedPreGolem"
import { RangedPrePlantera } from "../screens/Class/Ranged/GuideRanged/Pre-plantera(ranged)/RangedPrePlantera"
import { RangedPreLunarEvents } from "../screens/Class/Ranged/GuideRanged/Pre-lunarevents(ranged)/RangedPreLunarEvents"
import { RangedPreMoonLord } from "../screens/Class/Ranged/GuideRanged/Pre-moonlord(ranged)/RangedPreMoonLord"

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<ErrorNotFound/>} path="*" />
            <Route element={<Classes/>} path="/class" />
            <Route element={<Test/>} path="/test"/>


            {/* clases */}
            <Route element={<MeleeMain/>} path="/melee"/>
            <Route element={<Mage/>} path="/mage"/>
            <Route element={<RangedMain/>} path="/ranged"/>
            <Route element={<Summoner/>} path="/summoner"/>


            {/* melee */}
            <Route element={<Starfury/>} path="/meleeWeapons/starfury"/>
            <Route element={<BladeOfGrass/>} path="/meleeWeapons/bladeofgrass"/>
            <Route element={<NightsEdge/>} path="/meleeWeapons/nightsEdge"/>
            <Route element={<PlatinumArmor/>} path="/meleeArmor/platinumArmor"/>
            <Route element={<MoltenArmor/>} path="/meleeArmor/moltenArmor"/>
            <Route element={<SharpeningStation/>} path="/meleeBafs/sharpeningStation" />
            <Route element={<Sake/>} path="/meleeBafs/sake"/>
            <Route element={<Ichor/>} path="/meleeBafs/ichor" />
            <Route element={<CursedFlames/>} path="/meleeBafs/cursedFlames" />
            <Route element={<IceSickle/>} path="/meleeWeapons/iceSickle" />
            <Route element={<ShadowflameKnife/>} path="/meleeWeapons/shadowflameKnife"/>
            <Route element={<TitaniumArmor/>} path="/meleeArmor/titanumArmor"/>
            <Route element={<WarriorEmblem/>} path="/meleeAcs/warriorEmblem"/>
            <Route element={<BerserkerGlove/>} path="/meleeAcs/berserkerGlove"/>
            <Route element={<WrathPotion/>} path="/meleeBafs/wrathPotion"/>
            <Route element={<Zenith/>} path="/meleeWeapons/zenith"/>
            <Route element={<Rage/>} path="/meleeBafs/rage"/>
            <Route element={<Muramasa/>} path="/meleeWeapons/muramasa"/>
            <Route element={<LightsBane/>} path="/meleeWeapons/lightsBane"/>
            <Route element={<Volcano/>} path="/meleeWeapons/volcano"/>
            <Route element={<TrueNightsEdge/>} path="/meleeWeapons/trueNightsEdge"/>
            <Route element={<Excalibur/>} path="/meleeWepons/excalibur"/>
            <Route element={<TurtleArmor/>} path="/meleeArmor/turtleArmor"/>
            <Route element={<FireGauntlet/>} path="/meleeAcs/fireGauntlet"/>
            <Route element={<TerraBlade/>} path="/meleeWeapons/TerraBlade"/>
            <Route element={<TrueExcalibur/>} path="/meleeWeapons/TrueExcalibur"/>
            <Route element={<BeetleArmor/>} path="/meleeArmor/BeetleArmor"/>
            <Route element={<SolarEruption/>} path="/acs/SolarEruption"/>
            <Route element={<Daybreak/>} path="/acs/Daybreak"/>


            {/* melee stages */}
            <Route element={<MeleePreBosses/>} path="/melee/MeleePreBosses"/>
            <Route element={<MeleePreHardMode/>} path="/melee/MeleePreHardMode"/>
            <Route element={<MeleePreMechBosses/>} path="/melee/MeleePreMechBosses"/>
            <Route element={<MeleePrePlantera/>} path="/melee/MeleePrePlantera"/>
            <Route element={<MeleePreGolem/>} path="/melee/MeleePreGolem"/>
            <Route element={<MeleePreLunarEvents/>} path="/melee/MeleePreLunarEvents"/>
            <Route element={<MeleePreMoonLord/>} path="/melee/MeleePreMoonLord"/>

            
            {/* ranger stages */}
            <Route element={<RangedPreBosses/>} path="/ranged/RangedPreBosses"/>
            <Route element={<RangedPreHardMode/>} path="/ranged/RangedPreHardMode"/>
            <Route element={<RangedPreMechBosses/>} path="/ranged/RangedPreMechBosses"/>
            <Route element={<RangedPrePlantera/>} path="/ranged/RangedPrePlantera"/>
            <Route element={<RangedreGolem/>} path="/ranged/RangedreGolem"/>
            <Route element={<RangedPreLunarEvents/>} path="/ranged/RangedPreLunarEvents"/>
            <Route element={<RangedPreMoonLord/>} path="/ranged/RangedPreMoonLord"/>

        
            {/* acs */}
            <Route element={<HermesBoots/>} path="/acs/HermesBoots"/>
            <Route element={<RocketBoots/>} path="/acs/RocketBoots"/>
            <Route element={<SpectreBoots/>} path="/acs/SpectreBoots"/>
            <Route element={<LightningBoots/>} path="/acs/LightningBoots"/>
            <Route element={<FrostsparkBoots/>} path="/acs/FrostsparkBoots"/>
            <Route element={<LavaWaders/>} path="/acs/LavaWaders"/>
            <Route element={<ObsidianWaterWalkingBoots/>} path="/acs/ObsidianWaterWalkingBoots"/>
            <Route element={<Magiluminescence/>} path="/acs/Magiluminescence"/>
            <Route element={<CloudInABottle/>} path="/acs/CloudInABottle"/>
            <Route element={<BandOfRegeneration/>} path="/acs/BandOfRegeneration"/>
            <Route element={<SharkToothNecklace/>} path="/acs/SharkToothNecklace"/>
            <Route element={<FledglingWings/>} path="/acs/FledglingWings"/>
            <Route element={<TerrasparkBoots/>} path="/acs/TerrasparkBoots"/>
            <Route element={<BrainOfConfusion/>} path="/acs/BrainOfConfusion"/>
            <Route element={<ShieldOfCthulhu/>} path="/acs/ShieldOfCthulhu"/>
            <Route element={<WormScarf/>} path="/acs/WormScarf"/>
            <Route element={<AnkhShied/>} path="/acs/AnkhShied"/>
            <Route element={<FrozenWings/>} path="/acs/FrozenWings"/>
            <Route element={<FlameWings/>} path="/acs/FlameWings"/>
            <Route element={<AvangerEmblem/>} path="/acs/AvangerEmblem"/>
            <Route element={<MoonStone/>} path="/acs/MoonStone"/>
            <Route element={<CelestialStone/>} path="/acs/CelestialStone"/>
            <Route element={<CelestialShell/>} path="/acs/CelestialShell"/>
            <Route element={<MoonShell/>} path="/acs/MoonShell"/>
            <Route element={<DestroyerEmblem/>} path="/acs/DestroyerEmblem"/>


            {/* Wiki */}
            <Route element={<HardModeAnvils/>} path="/wiki/items/hardModeAnvils"/>
            <Route element={<Jungle_Spores/>} path="/wiki/items/jungle_Spore"/>
            <Route element={<Stingers/>} path="/wiki/items/stinger"/>
            <Route element={<Vine/>} path="/wiki/items/vine"/>
            <Route element={<PreHardModeAnvils/>} path="/wiki/preHardMode/preHardModeAnvils"/>
            <Route element={<IronBar/>} path="/wiki/preHardMode/ironBar"/>
            <Route element={<LeadBar/>} path="/wiki/preHardMode/leadBar"/>


            {/* <Route element={} path=""/> */}
        </Routes>
    </BrowserRouter>
  )
}
