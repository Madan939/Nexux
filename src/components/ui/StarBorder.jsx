
const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container inline-block relative  hover:cursor-pointer overflow-hidden ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom "
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content font-semibold w-full md:w-[200px] h-11 md:h-13 flex justify-center items-center">{children}</div>
    </Component>
  );
};

export default StarBorder;
