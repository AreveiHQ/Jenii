import Image from "next/image";
import Header from "./components/Header";
import Info from "./components/Info";

export default function Home() {
  return (
   <>
    <div className="bg-[linear-gradient(to_bottom,#ffece6,#fddbc6,#f9a58e)]">
      <Header/>
      <div className="mt-4">
      <Info/>
      </div>
      </div>
   </>
  );
}
// background: radial-gradient(49.69% 46.99% at 49.42% 42.82%, #AAAAAA 0%, #B6B6B6 8%, #D5D5D5 33%, #ECECEC 57%, #FAFAFA 80%, #FFFFFF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
// background-blend-mode: multiply;
