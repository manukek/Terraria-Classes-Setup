import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { ErrorNotFound } from "../../assets/Errors/ErrorNotFound"
import { MeleeMain } from '../screens/Terraria/Melee/MeleeMain'
import { SummonerMain } from '../screens/Terraria/Summoner/SummonerMailn'
import { Starfury } from "../screens/Terraria/Melee/MeleeWeapons/Starfury"
import { BladeOfGrass } from '../screens/Terraria/Melee/MeleeWeapons/BladeOfGrass'
import { PlatinumArmor } from "../screens/Terraria/Melee/MeleeArmor/PlatinumArmor"
import { MoltenArmor } from "../screens/Terraria/Melee/MeleeArmor/MoltenArmor"
import { NightsEdge } from '../screens/Terraria/Melee/MeleeWeapons/NightsEdge'
import { SharpeningStation } from "../screens/Terraria/Melee/MeleeBuffs/SharpeningStation"
import { IceSickle } from "../screens/Terraria/Melee/MeleeWeapons/IceSickle"
import { ShadowflameKnife } from "../screens/Terraria/Melee/MeleeWeapons/ShadowflameKnife"
import { TitaniumArmor } from "../screens/Terraria/Melee/MeleeArmor/TitaniumArmor"
import { Sake } from "../screens/Terraria/Melee/MeleeBuffs/Sake"
import { Ichor } from "../screens/Terraria/Melee/MeleeBuffs/Ichor"
import { CursedFlames } from "../screens/Terraria/Melee/MeleeBuffs/CursedFlames"
import { WarriorEmblem } from "../screens/Terraria/Melee/MeleeAcs/WarriorEmblem"
import { BerserkerGlove } from "../screens/Terraria/Melee/MeleeAcs/BerserkerGlove"
import { WrathPotion } from "../screens/Terraria/Melee/MeleeBuffs/WrathPotion"
import { Rage } from "../screens/Terraria/Melee/MeleeBuffs/Rage"
import { HardModeAnvils } from "../screens/Wiki/Items/HardMode/From_underbroundHard/HardModeAnvils"
import { Jungle_Spores } from "../screens/Wiki/Items/PreHardMode/From_mobs/Jungle_Spores"
import { Stingers } from "../screens/Wiki/Items/PreHardMode/From_mobs/Stingers"
import { Vine } from "../screens/Wiki/Items/PreHardMode/From_mobs/Vine"
import { PreHardModeAnvils } from "../screens/Wiki/Items/PreHardMode/From_underground/PreHardModeAnvils"
import { IronBar } from "../screens/Wiki/Items/PreHardMode/From_underground/Bars/IronBar"
import { LeadBar } from "../screens/Wiki/Items/PreHardMode/From_underground/Bars/LeadBar"
import { Muramasa } from '../screens/Terraria/Melee/MeleeWeapons/CraftWeapons/Muramasa'
import { LightsBane } from '../screens/Terraria/Melee/MeleeWeapons/CraftWeapons/LightsBane'
import { Volcano } from '../screens/Terraria/Melee/MeleeWeapons/CraftWeapons/Volcano'
import { TrueNightsEdge } from "../screens/Terraria/Melee/MeleeWeapons/TrueNightsEdge"
import { MeleePreBosses } from "../screens/Terraria/Melee/GuideMelee/Pre-bosses(melee)/MeleePreBosses"
import { MeleePreHardMode } from "../screens/Terraria/Melee/GuideMelee/Pre-hardmode(melee)/MeleePreHardMode"
import { MeleePreMechBosses } from "../screens/Terraria/Melee/GuideMelee/Pre-MechBosses(melee)/MeleePreMechBosses"
import { MeleePrePlantera } from "../screens/Terraria/Melee/GuideMelee/Pre-plantera(melee)/MeleePrePlantera"
import { MeleePreGolem } from "../screens/Terraria/Melee/GuideMelee/Pre-Golem(melee)/MeleePreGolem"
import { MeleePreLunarEvents } from "../screens/Terraria/Melee/GuideMelee/Pre-LunarEvents(melee)/MeleePreLunarEvents"
import { MeleePreMoonLord } from '../screens/Terraria/Melee/GuideMelee/Pre-Moon-Lord(melee)/MeleePreMoonLord'
import { Excalibur } from "../screens/Terraria/Melee/MeleeWeapons/Excalibur"
import { TurtleArmor } from "../screens/Terraria/Melee/MeleeArmor/TurtleArmor"
import { FireGauntlet } from "../screens/Terraria/Melee/MeleeAcs/FireGauntlet"
import { HermesBoots } from "../screens/Terraria/Acs/PreBosses/HermesBoots"
import { RocketBoots } from "../screens/Terraria/Acs/Crafting/RocketBoots"
import { SpectreBoots } from "../screens/Terraria/Acs/Crafting/SpectreBoots"
import { LightningBoots } from "../screens/Terraria/Acs/PreBosses/LightningBoots"
import { FrostsparkBoots } from "../screens/Terraria/Acs/Crafting/FrostsparkBoots"
import { LavaWaders } from "../screens/Terraria/Acs/Crafting/LavaWaders"
import { ObsidianWaterWalkingBoots } from "../screens/Terraria/Acs/Crafting/ObsidianWaterWalkingBoots"
import { Magiluminescence } from "../screens/Terraria/Acs/PreBosses/Magiluminescence"
import { CloudInABottle } from "../screens/Terraria/Acs/PreBosses/CloudInABottle"
import { BandOfRegeneration } from "../screens/Terraria/Acs/PreBosses/BandOfRegeneration"
import { SharkToothNecklace } from "../screens/Terraria/Acs/PreBosses/SharkToothNecklace"
import { FledglingWings } from "../screens/Terraria/Acs/PreBosses/FledglingWings"
import { TerraBlade } from "../screens/Terraria/Melee/MeleeWeapons/TerraBlade"
import { TrueExcalibur } from "../screens/Terraria/Melee/MeleeWeapons/TrueExcalibut"
import { BeetleArmor } from "../screens/Terraria/Melee/MeleeArmor/BeetleArmor"
import { TerrasparkBoots } from "../screens/Terraria/Acs/PreHardMode/TerrasparkBoots"
import { BrainOfConfusion } from "../screens/Terraria/Acs/PreHardMode/BrainOfConfusion"
import { ShieldOfCthulhu } from "../screens/Terraria/Acs/PreHardMode/ShieldOfCthulhu"
import { WormScarf } from "../screens/Terraria/Acs/PreHardMode/WormScarf"
import { AnkhShied } from "../screens/Terraria/Acs/PreMechBosses/AnkhShied"
import { FrozenWings } from "../screens/Terraria/Acs/PreMechBosses/FrozenWings"
import { AvangerEmblem } from "../screens/Terraria/Acs/PrePlantera/AvangerEmblem"
import { FlameWings } from "../screens/Terraria/Acs/PrePlantera/FlameWings"
import { MoonStone } from "../screens/Terraria/Acs/PreGolem/MoonStone"
import { CelestialStone } from "../screens/Terraria/Acs/PreLunarEvents/CelestialStone"
import { CelestialShell } from "../screens/Terraria/Acs/PreLunarEvents/CelestialShell"
import { MoonShell } from "../screens/Terraria/Acs/PreLunarEvents/MoonShell"
import { DestroyerEmblem } from "../screens/Terraria/Acs/PreLunarEvents/DestroyerEmblem"
import { SolarEruption } from "../screens/Terraria/Melee/MeleeWeapons/SolarEruption"
import { Daybreak } from "../screens/Terraria/Melee/MeleeWeapons/Daybreak"
import { Test } from "../../tests/Test"
import { RangedMain } from "../screens/Terraria/Ranged/RangedMain"
import { RangedPreBosses } from "../screens/Terraria/Ranged/GuideRanged/Pre-bosses(ranged)/RangedPreBosses"
import { RangedPreHardMode } from "../screens/Terraria/Ranged/GuideRanged/Pre-hardmode(ranged)/RangedPreHardMode"
import { RangedPreMechBosses } from "../screens/Terraria/Ranged/GuideRanged/Pre-mechbosses(ranged)/RangedPreMechBosses"
import { RangedreGolem } from "../screens/Terraria/Ranged/GuideRanged/Pre-golem(ranged)/RangedPreGolem"
import { RangedPrePlantera } from "../screens/Terraria/Ranged/GuideRanged/Pre-plantera(ranged)/RangedPrePlantera"
import { RangedPreLunarEvents } from "../screens/Terraria/Ranged/GuideRanged/Pre-lunarevents(ranged)/RangedPreLunarEvents"
import { RangedPreMoonLord } from "../screens/Terraria/Ranged/GuideRanged/Pre-moonlord(ranged)/RangedPreMoonLord"
import { Minishark } from "../screens/Terraria/Ranged/RangedWeapons/Minishark"
import { ArcheryPotion } from "../screens/Terraria/Ranged/RangedBuffs/ArcheryPotion"
import { TheBeesKnees } from "../screens/Terraria/Ranged/RangedWeapons/TheBeesKnees"
import { NecroArmor } from "../screens/Terraria/Ranged/RangedArmor/NecroArmor"
import { DaedalusStormbow } from "../screens/Terraria/Ranged/RangedWeapons/DaedalusStormbow"
import { OnyxBlaster } from "../screens/Terraria/Ranged/RangedWeapons/OnyxBlaster"
import { RangerEmblem } from "../screens/Terraria/Ranged/RangedAcs/RangerEmblem"
import { Quivers } from "../screens/Terraria/Ranged/RangedAcs/Quivers"
import { Megashark } from "../screens/Terraria/Ranged/RangedWeapons/Megashark"
import { HallowedArmor } from "../screens/Terraria/Ranged/RangedArmor/HallowedArmor"
import { ShroomiteArmor } from "../screens/Terraria/Ranged/RangedArmor/ShroomiteArmor"
import { Tsunami } from "../screens/Terraria/Ranged/RangedWeapons/Tsunami"
import { SniperScope } from "../screens/Terraria/Ranged/RangedAcs/SniperScope"
import { Phantasm } from "../screens/Terraria/Ranged/RangedWeapons/Phantasm"
import { MageMain } from "../screens/Terraria/Mage/MageMain"
import { MagePreBosses } from "../screens/Terraria/Mage/GuideMage/Pre-bosses(mage)/MagePreBosses"
import { MagePreHardmode } from "../screens/Terraria/Mage/GuideMage/Pre-hardmode(mage)/MagePreHardmode"
import { MagePreMechBosses } from "../screens/Terraria/Mage/GuideMage/Pre-mechbosses(mage)/MagePreMechBosses"
import { MagePrePlantera } from "../screens/Terraria/Mage/GuideMage/Pre-plantera(mage)/MagePrePlantera"
import { MagePreGolem } from "../screens/Terraria/Mage/GuideMage/Pre-golem(mage)/MagePreGolem"
import { MagePreLunarEvents } from "../screens/Terraria/Mage/GuideMage/Pre-lunarevents(mage)/MagePreLunarEvents"
import { MagePreMoonLord } from "../screens/Terraria/Mage/GuideMage/Pre-moonlord(mage)/MagePreMoonLord"
import { ThunderZapper } from "../screens/Terraria/Mage/MageWeapons/ThunderZapper"
import { ManaRegenerationPotion } from "../screens/Terraria/Mage/MageBuffs/ManaRegenerationPotion"
import { MagicPowerPotion } from "../screens/Terraria/Mage/MageBuffs/MagicPowerPotion"
import { BeeGun } from "../screens/Terraria/Mage/MageWeapons/BeeGun"
import { JungleArmor } from "../screens/Terraria/Mage/MageArmor/JungleArmor"
import { SkyFracture } from "../screens/Terraria/Mage/MageWeapons/SkyFracture"
import { ScorcererEmblem } from "../screens/Terraria/Mage/MageAcs/ScorcererEmblem"
import { CelestialEmblem } from "../screens/Terraria/Mage/MageAcs/CelestialEmblem"
import { Razorpine } from "../screens/Terraria/Mage/MageWeapons/Razorpine"
import { SpectreArmor } from "../screens/Terraria/Mage/MageArmor/SpectreArmor"
import { NebulaBlaze } from "../screens/Terraria/Mage/MageWeapons/NebulaBlaze"
import { Snapthorn } from "../screens/Terraria/Summoner/SumWeapons/Snapthorn"
import { SumPreBosses } from "../screens/Terraria/Summoner/GuideSum/Pre-bosses(sum)/SumPreBosses"
import { FlinxStaff } from "../screens/Terraria/Summoner/SumWeapons/FlinxStaff"
import { SumPreGolem } from "../screens/Terraria/Summoner/GuideSum/Pre-golem(sum)/SumPreGolem"
import { SumPreHardmode } from "../screens/Terraria/Summoner/GuideSum/Pre-hardmode(sum)/SumPreHardmode"
import { SumreLunarEvents } from "../screens/Terraria/Summoner/GuideSum/Pre-lunarevents(sum)/SumPreLunarEvents"
import { SumPreMechBosses } from "../screens/Terraria/Summoner/GuideSum/Pre-mechbosses(sum)/SumPreMechBosses"
import { SumPreMoonlord } from "../screens/Terraria/Summoner/GuideSum/Pre-moonlord(sum)/SumPreMoonlord"
import { SumPrePlantera } from "../screens/Terraria/Summoner/GuideSum/Pre-plantera(sum)/SumPrePlantera"
import { FlinxFurCoat } from "../screens/Terraria/Summoner/SumArmor/FlinxFurCoat"
import { SummoningPotion } from "../screens/Terraria/Summoner/SumBuffs/SummoningPotion"
import { FeralClaws } from "../screens/Terraria/Summoner/SumAcs/FeralClaws"
import { SpinalTap } from "../screens/Terraria/Summoner/SumWeapons/SpinalTap"
import { ImpStaff } from "../screens/Terraria/Summoner/SumWeapons/ImpStaff"
import { ObsidianArmor } from "../screens/Terraria/Summoner/SumArmor/ObsidianArmor"
import { PygmyNecklace } from "../screens/Terraria/Summoner/SumAcs/PygmyNecklace"
import { CoolWhip } from "../screens/Terraria/Summoner/SumWeapons/CoolWhip"
import { SpiderArmor } from "../screens/Terraria/Summoner/SumArmor/SpiderArmor"
import { SummonerEmblem } from "../screens/Terraria/Summoner/SumAcs/SummonerEmblem"
import { Durendal } from "../screens/Terraria/Summoner/SumWeapons/Durendal"
import { SpiderStaff } from "../screens/Terraria/Summoner/SumWeapons/SpiderStaff"
import { OpticStaff } from "../screens/Terraria/Summoner/SumWeapons/OpticStaff"
import { MorningStar } from "../screens/Terraria/Summoner/SumWeapons/MorningStar"
import { Terraprisma } from "../screens/Terraria/Summoner/SumWeapons/Terraprisma"
import { TikiArmor } from "../screens/Terraria/Summoner/SumArmor/TikiArmor"
import { HerculesBeetle } from "../screens/Terraria/Summoner/SumArmor/HerculesBeetle"
import { PapyrusScarab } from "../screens/Terraria/Summoner/SumAcs/PapyrusScarab"
import { NecromanticScroll } from "../screens/Terraria/Summoner/SumAcs/NecromanticScroll"
import { CalMeleeMain } from "../screens/Calamity/Melee/CalMeleeMain"

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<ErrorNotFound/>} path="*" />
            <Route element={<Test/>} path="/test"/>


            {/* clases */}
            <Route element={<MeleeMain/>} path="/melee"/>
            <Route element={<MageMain/>} path="/mage"/>
            <Route element={<RangedMain/>} path="/ranged"/>
            <Route element={<SummonerMain/>} path="/summoner"/>

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
            <Route element={<SolarEruption/>} path="/melee/SolarEruption"/>
            <Route element={<Daybreak/>} path="/melee/Daybreak"/>


            {/* melee stages */}
            <Route element={<MeleePreBosses/>} path="/melee/MeleePreBosses"/>
            <Route element={<MeleePreHardMode/>} path="/melee/MeleePreHardMode"/>
            <Route element={<MeleePreMechBosses/>} path="/melee/MeleePreMechBosses"/>
            <Route element={<MeleePrePlantera/>} path="/melee/MeleePrePlantera"/>
            <Route element={<MeleePreGolem/>} path="/melee/MeleePreGolem"/>
            <Route element={<MeleePreLunarEvents/>} path="/melee/MeleePreLunarEvents"/>
            <Route element={<MeleePreMoonLord/>} path="/melee/MeleePreMoonLord"/>

            {/* ranged */}
            <Route element={<Minishark/>} path="/ranged/Minishark"/>
            <Route element={<ArcheryPotion/>} path="/ranged/ArcheryPotion"/>
            <Route element={<TheBeesKnees/>} path="/ranged/TheBeesKnees"/>
            <Route element={<NecroArmor/>} path="/ranged/NecroArmor"/>
            <Route element={<DaedalusStormbow/>} path="/ranged/DaedalusStormbow"/>
            <Route element={<OnyxBlaster/>} path="/ranged/OnyxBlaster"/>
            <Route element={<RangerEmblem/>} path="/ranged/RangerEmblem"/>
            <Route element={<Megashark/>} path="/ranged/Megashark"/>
            <Route element={<HallowedArmor/>} path="/ranged/HallowedArmor"/>
            <Route element={<ShroomiteArmor/>} path="/ranged/ShroomiteArmor"/>
            <Route element={<Tsunami/>} path="/ranged/Tsunami"/>
            <Route element={<SniperScope/>} path="/ranged/SniperScope"/>
            <Route element={<Phantasm/>} path="/ranged/Phantasm"/>
            <Route element={<Quivers/>} path="/ranged/Quivers"/>

            {/* ranger stages */}
            <Route element={<RangedPreBosses/>} path="/ranged/RangedPreBosses"/>
            <Route element={<RangedPreHardMode/>} path="/ranged/RangedPreHardMode"/>
            <Route element={<RangedPreMechBosses/>} path="/ranged/RangedPreMechBosses"/>
            <Route element={<RangedPrePlantera/>} path="/ranged/RangedPrePlantera"/>
            <Route element={<RangedreGolem/>} path="/ranged/RangedPreGolem"/>
            <Route element={<RangedPreLunarEvents/>} path="/ranged/RangedPreLunarEvents"/>
            <Route element={<RangedPreMoonLord/>} path="/ranged/RangedPreMoonLord"/>

            {/* mage */}
            <Route element={<ThunderZapper/>} path="/mage/ThunderZapper"/>
            <Route element={<ManaRegenerationPotion/>} path="/mage/ManaRegenerationPotion"/>
            <Route element={<MagicPowerPotion/>} path="/mage/MagicPowerPotion"/>
            <Route element={<BeeGun/>} path="/mage/BeeGun"/>
            <Route element={<JungleArmor/>} path="/mage/JungleArmor"/>
            <Route element={<SkyFracture/>} path="/mage/SkyFracture"/>
            <Route element={<ScorcererEmblem/>} path="/mage/ScorcererEmblem"/>
            <Route element={<CelestialEmblem/>} path="/mage/CelestialEmblem"/>
            <Route element={<Razorpine/>} path="/mage/Razorpine"/>
            <Route element={<SpectreArmor/>} path="/mage/SpectreArmor"/>
            <Route element={<NebulaBlaze/>} path="/mage/NebulaBlaze"/>
      
            {/* mage stages */}
            <Route element={<MagePreBosses/>} path="/mage/MagePreBosses"/>
            <Route element={<MagePreHardmode/>} path="/mage/MagePreHardmode"/>
            <Route element={<MagePreMechBosses/>} path="/mage/MagePreMechBosses"/>
            <Route element={<MagePrePlantera/>} path="/mage/MagePrePlantera"/>
            <Route element={<MagePreGolem/>} path="/mage/MagePreGolem"/>
            <Route element={<MagePreLunarEvents/>} path="/mage/MagePreLunarEvents"/>
            <Route element={<MagePreMoonLord/>} path="/mage/MagePreMoonLord"/>

            {/* summoner */}
            <Route element={<Snapthorn/>} path="/sum/Snapthorn"/>
            <Route element={<FlinxStaff/>} path="/sum/FlinxStaff"/>
            <Route element={<FlinxFurCoat/>} path="/sum/FlinxFurCoat"/>
            <Route element={<SummoningPotion/>} path="/sum/SummoningPotion"/>
            <Route element={<FeralClaws/>} path="/sum/FeralClaws"/>
            <Route element={<SpinalTap/>} path="/sum/SpinalTap"/>
            <Route element={<ImpStaff/>} path="/sum/ImpStaff"/>
            <Route element={<ObsidianArmor/>} path="/sum/ObsidianArmor"/>
            <Route element={<PygmyNecklace/>} path="/sum/PygmyNecklace"/>
            <Route element={<CoolWhip/>} path="/sum/CoolWhip"/>
            <Route element={<SpiderArmor/>} path="/sum/SpiderArmor"/>
            <Route element={<SummonerEmblem/>} path="/sum/SummonerEmblem"/>
            <Route element={<Durendal/>} path="/sum/Durendal"/>
            <Route element={<SpiderStaff/>} path="/sum/SpiderStaff"/>
            <Route element={<OpticStaff/>} path="/sum/OpticStaff"/>
            <Route element={<MorningStar/>} path="/sum/MorningStar"/>
            <Route element={<Terraprisma/>} path="/sum/Terraprisma"/>
            <Route element={<TikiArmor/>} path="/sum/TikiArmor"/>
            <Route element={<HerculesBeetle/>} path="/sum/HerculesBeetle"/>
            <Route element={<NecromanticScroll/>} path="/sum/NecromanticScroll"/>
            <Route element={<PapyrusScarab/>} path="/sum/PapyrusScarab"/>



            {/* summoner stages */} 
            <Route element={<SumPreBosses/>} path="/sum/SumPreBosses"/>
            <Route element={<SumPreGolem/>} path="/sum/SumPreGolem"/>
            <Route element={<SumPreHardmode/>} path="/sum/SumPreHardmode"/>
            <Route element={<SumreLunarEvents/>} path="/sum/SumPreLunarEvents"/>
            <Route element={<SumPreMechBosses/>} path="/sum/SumPreMechBosses"/>
            <Route element={<SumPreMoonlord/>} path="/sum/SumPreMoonlord"/>
            <Route element={<SumPrePlantera/>} path="/sum/SumPrePlantera"/>


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

            {/* calamity classes */}
            <Route element={<CalMeleeMain/>} path="/cal/melee"/>
            <Route element={<MageMain/>} path="/cal/mage"/>
            <Route element={<RangedMain/>} path="/cal/ranged"/>
            <Route element={<SummonerMain/>} path="/cal/summoner"/>
            <Route element={<SummonerMain/>} path="/cal/rogue"/>



            {/* <Route element={} path=""/> */}
        </Routes>
    </BrowserRouter>
  )
}
