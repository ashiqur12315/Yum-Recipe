


const Header = () => {
    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="flex-none">
                            <a className="btn btn-ghost text-3xl text-[#150B2B] font-bold">YuM Recipe</a>
                </div>

        
            <nav className="flex-1 justify-center space-x-12 text-[#150b2bb3] font-normal text-[16px]">
                <button>Home</button>
                <button>Recipes</button>
                <button>About</button>
                <button>Search</button>
            </nav>
            

            <div className="flex-none gap-2 ">
                <div className="bg-[#150b2b0d] px-6 rounded-full">
                    <i className="fa-solid fa-magnifying-glass "></i>
                    <input type="text" placeholder="search" className="m-3 border-none focus:outline-none bg-[#150b2b03]"/>
                </div>

                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full border border-green-700 ">
                    {/* <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                    <i className="fa-regular fa-user w-full text-3xl text-green-700"></i>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* BAnner section */}
                <div className="hero min-h-[600px] rounded-3xl overflow-hidden mt-12 bg-cover" style={{backgroundImage:  'url(https://i.ibb.co/ggw1R27/banner.jpg)'}}>
                <div className="hero-overlay bg-opacity-5 bg-gradient-to-t from-[#150b2be6] to-[#150b2b00]"></div>
                <div className="hero-content text-center text-neutral-content">
            <div className="w-4/6">
            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-10">Unleash your culinary creativity with personalized cooking classes, designed just for you. Explore unique recipes and techniques under expert guidance in an immersive culinary experience.</p>
            <div className='mt-8'>
                <button className='py-4 px-5 w-48 bg-[#0BE58A] text-[#150B2B] rounded-full mx-5 text-xl font-semibold'>Explore Now</button>
                <button className='py-4 px-5 w-48 border-2 rounded-full text-xl font-semibold'>Our Feedback</button>
            </div>
            </div>
        </div>
                </div>
                
        </div>

        
        

    );
};

export default Header;