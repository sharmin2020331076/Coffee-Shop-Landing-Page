
export function Footer(){
    return<>
    <div className="p-4 sm:p-8 lg:p-16">
    <div className="bg-coffee rounded-2xl backdrop-blur-lg flex flex-col justify-between">
            
            <div className="flex justify-between px-8 py-12 gap-8 sm:gap-16 lg:gap-32 flex-wrap">
                {/*Title*/}
            <div className="space-y-1.5">
            <span className="flex space-x-2">
                <h1 className="font-bold text-xl sm:text-2xl text-white">Flavored</h1>
                <img src="/icons/favicon.png" alt="Logo" className="w-6 h-6 sm:w-7 sm:h-7 filter invert brightness-0"/>
            </span>
            <p className="text-white font-semibold text-xs sm:text-sm">Wake up to something special</p>
            </div>

            {/*Services*/}
            <div className="text-white space-y-1">
                <p className="text-sm sm:text-lg font-semibold">Services</p>
                <p className="text-gray-200 text-xs sm:text-sm ">Pricing</p>
                <p className="text-gray-200 text-xs sm:text-sm ">Tracking</p>
                <p className="text-gray-200 text-xs sm:text-sm ">Report a Bag</p>
                <p className="text-gray-200 text-xs sm:text-sm">Terms of Services</p>
            </div>

            {/*Company*/}
            <div className="text-white space-y-1">
                <p className="text-sm sm:text-lg font-semibold">Company</p>
                <p className="text-gray-200 text-xs sm:text-sm ">Pricing</p>
                <p className="text-gray-200 text-xs sm:text-sm ">Tracking</p>
                <p className="text-gray-200 text-xs sm:text-sm ">Report a Bag</p>
                <p className="text-gray-200 text-xs sm:text-sm">Terms of Services</p>
            </div>

            {/*Adress*/}
            <div className="text-white space-y-1">
                <p className="text-sm sm:text-lg font-semibold">Address</p>
                <p className="text-gray-200 text-xs sm:text-sm">Pricing</p>
                <p className="text-gray-200 text-xs sm:text-sm">Tracking</p>
                <p className="text-gray-200 text-xs sm:text-sm">Report a Bag</p>
                <p className="text-gray-200 text-xs sm:text-sm">Terms of Services</p>
            </div>
            {/*Social*/}
            <div className="justify-center items-center space-y-3">
                <span className="text-sm sm:text-lg text-white font-semibold">Follow Us</span>
                <span className="flex flex-col justify-center items-center space-y-2">
                    <img src="/icons/facebook.png" alt="fb" height="16" width="16" className="cursor-pointer hover:scale-110"/>
                    <img src="/icons/instagram.png" alt="ig" height="16" width="16" className="cursor-pointer hover:scale-110"/>
                    <img src="/icons/twitter.png" alt="tw" height="16" width="16" className="cursor-pointer hover:scale-110"/>
                    <img src="/icons/youtube.png" alt="yt" height="16" width="16" className="cursor-pointer hover:scale-110"/>
                </span>
            </div>
            </div>

        </div>
    </div>
    
    </>
}