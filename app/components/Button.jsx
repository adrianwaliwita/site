const Button = () => {
  return (
    <button className="p-[1.5px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2e2e53] to-[#0000ff] rounded-lg" />
      <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-[#0000ff] hover:bg-transparent hover:text-white">
        Get in Touch
      </div>
    </button>
  );
};

export default Button;