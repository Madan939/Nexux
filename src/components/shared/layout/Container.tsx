const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="container xl:max-w-[1250px] w-[90%] mx-auto">{children}</section>
  )
}

export default Container