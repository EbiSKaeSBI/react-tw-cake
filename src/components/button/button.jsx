
function Button({ children }) {
  return (
    <>
      <button className="px-5 max-h-12 bg-[rgb(217,94,94)] text-white font-bold rounded-3xl hover:bg-[rgb(247,210,186)] transition-all duration-300 hover:shadow-inner md:max-w-[160px] md:h-9 md:text-sm lg:max-w-[240px] lg:h-16 lg:text-xl">
        {children}
      </button>
    </>
  )
}

export default Button;