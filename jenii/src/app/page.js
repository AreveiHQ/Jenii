import Image from "next/image";
import Header from "./components/Header";
import Info from "./components/Info";

export default function Home() {
  return (
   <>
    <div className="bg-gradient-to-b from-pink-100 to-pink-200">
      <Header/>
      <div className="mt-4">
      <Info/>
      </div>
      </div>
   </>
  );
}
