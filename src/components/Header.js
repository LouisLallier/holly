import Image from "next/image";
import logo from "../assets/Hollywood-Logo.svg";

const Header = () => {
  return (
    <div
      className={
        "flex fixed top-0 w-full justify-evenly items-center border-b border-black py-4"
      }
    >
      <Image src={logo} alt="logo" width={250} />
      <p className={"text-2xl font-bold"}>Hollywood Boulevard</p>
    </div>
  );
};

export default Header;
