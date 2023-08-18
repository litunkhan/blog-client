
import banner from './Banner.png'
const Home = () => {
    return (
       
         <div className="  py-6 max-w-[1000px] mx-auto flex justify-between flex-col items-center md:flex-row    text-black">
      <div className="banner-content md:w-[50%] pr-4">
        <h1 className=" uppercase text-gray-600 text-6xl md:text-8xl font-bold drop-shadow-lg shadow-black mb-2">Blogger</h1>
        <p className="text-lg mb-4">
          A platform for sharing your thoughts, stories, and ideas through blogging.
        </p>
        <button className="bg-orange-500 px-4 text-white rounded-lg shadow">
          Learn More
        </button>
      </div>
      <div className="banner-image md:w-[50%] mt-3 md:mt-0">
        <img src={banner} alt="Blogger" className=" h-auto" />
      </div>
    </div>
      
    );
};

export default Home;