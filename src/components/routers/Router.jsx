import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { ErrorNotFound } from "../../assets/Errors/ErrorNotFound"
import { Classes } from "../screens/ClassesMain"
import {MeleeMain} from '../screens/Class/Melee/MeleeMain'
import {Magic} from '../screens/Class/Magic/Magic'
import {Ranged} from '../screens/Class/Ranged/Ranged'
import {Summoner} from '../screens/Class/Summoner/Summoner'
import {Starfury} from '../screens/Class/Melee/MeleeWeapons/Starfury'
import { BladeOfGrass } from "../screens/Class/Melee/MeleeWeapons/BladeOfGrass"
import { PlatinumArmor } from "../screens/Class/Melee/MeleeArmor/PlatinumArmor"
import { MoltenArmor } from "../screens/Class/Melee/MeleeArmor/MoltenArmor"
import { NightsEdge } from "../screens/Class/Melee/MeleeWeapons/NightsEdge"
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

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<ErrorNotFound/>} path="*" />
            <Route element={<Classes/>} path="/class" />

            {/* clases */}
            <Route element={<MeleeMain/>} path="/melee"/>
            <Route element={<Magic/>} path="/magic"/>
            <Route element={<Ranged/>} path="/ranged"/>
            <Route element={<Summoner/>} path="/summoner"/>

            {/* meleeWeapons */}
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

        </Routes>
    </BrowserRouter>
  )
}
