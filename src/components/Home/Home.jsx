import AnimatedCircles from "../circles/circles";
import styles from '../css/App.module.scss';
import DropdownMenu from "../dropdown/dropdown";


export const Home = () => {
  return (
    <>
      <AnimatedCircles />
      <div className={styles.Home}>
        <div className="flex justify-center items-center h-screen animate-fade-in bg-gradient-to-t from-[#A5B1C2]/15 to-transparent ">
          <div className="text-center">
            <span className="flex justify-center bg-gradient-to-t from-[#A5B1C2] via-[#B0BCCF] to-[#CBD4DF] bg-clip-text text-transparent text-6xl font-manrope font-bold p-4">Terraria class guide</span>
            <h1 className="text-lime-50/50">
              P.s: in this guide there will be only relevant types of armor and weapons in the passage,
            </h1>
            <DropdownMenu />
           {/* <div className="flex items-center justify-center animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
              <path d="M12 4L12 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg> 
            </div>*/} {/* на патом */}
          </div>
        </div>
      </div>
    </>
  );
};
