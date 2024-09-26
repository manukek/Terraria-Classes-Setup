import AnimatedCircles from "../circles/circles";
import styles from '../css/App.module.scss';
import DropdownMenu from "../dropdown/dropdown";


export const Home = () => {
  return (
    <>
      <AnimatedCircles />
      <div className={styles.Home}>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <span className="flex justify-center bg-gradient-to-t from-[#d3e46c] via-[#e1ed94] to-[#eff6ba] bg-clip-text text-transparent text-6xl animate-fade-in font-manrope font-bold p-4">Terraria class guide</span>
            <h1 className="text-lime-50/50">
              P.s: in this guide there will be only relevant types of armor and weapons in the passage,
            </h1>
            <DropdownMenu />
          </div>
        </div>
      </div>
    </>
  );
};
