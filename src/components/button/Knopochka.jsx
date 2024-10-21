function button({props}) {
  return (
    <>
      <button className="max-w-[160px] px-5 h-12 max-h-12 bg-[rgb(217,94,94)] text-white font-bold text-base rounded-3xl hover:bg-[rgb(247,210,186)] transition-all duration-300 hover:shadow-inner ">
        {props}
      </button>
    </>
  )
}
export default button