

const PostBlog = () => {
    return (
        <div className="  py-6 max-w-[1000px] mx-auto flex justify-between flex-col items-center md:flex-row   mt-8 text-black">
        <div className="banner-content md:w-[60%] pr-4">
          <h1 className=" uppercase text-gray-600 text-6xl md:text-8xl font-bold drop-shadow-lg shadow-black mb-2">Post Blog</h1>
          <p className="text-lg mb-4">
          Explore the latest insights, tips, and trends in our comprehensive blog post. Discover engaging content that covers a wide range of topics, from technology and lifestyle to health and travel, all curated to keep you informed and entertained
          </p>
          <button className="bg-orange-500 px-4 text-white rounded-lg shadow">
            Learn More
          </button>
        </div>
        <div className="banner-image md:w-[40%] mt-3 md:mt-0">
        <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title</label>
                            <input type="text" name="title" id="title" placeholder="blog title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div>
                            <label htmlFor="discripsiton" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog discription</label>
                            <input type="text" name="discripsiton" id="confirm-password" placeholder="Blog discription" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        
                        <button type="submit" className="w-full text-white bg-orange-600 p-2 rounded-md">Post</button>
                       
                    </form>
        </div>
      </div>
    );
};

export default PostBlog;