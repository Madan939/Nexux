import Image from "next/image"
import { Login1 } from "../../ui/login1"

const LoginPage = () => {
    const logo = {
        url: "",
        src: "/images/logo.svg",
        alt: "logo",
        title: "",
    }
  return (
   <div className="relative h-screen w-full overflow-hidden">
  {/* Background image */}
  <Image
    src="/images/hero-section.svg"
    alt="Background-image"
    fill
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  {/* Foreground content */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <Login1 logo={logo} />
  </div>
</div>


  )
}

export default LoginPage