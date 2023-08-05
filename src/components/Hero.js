import { Link} from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex w-full relative top-0 z-[-1]">
      <video loop autoplay="autoplay" muted className="bg-banner">
        <source
          src="https://dl.dropboxusercontent.com/s/ndl9m1ktsa8pprz/de.mp4?dl=0"
          // https://content.rolex.com/dam/homepage/hss/watches/professional-watches/yacht-master/homepage-yacht-master-42_m226659-0002.mp4
          type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
      <div className="absolute top-1/2 w-full">
        <div className="text-white text-center">
          <h1 className="text-3xl fw-bolder mb-4">FIELD OTOMATIC</h1>
          <p className="text-xl hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="cursor-pointer">
            <Link to="/register" className="md:hidden px-6 py-2 rounded-full text-white  border-dotted border-2 cursor-pointer hover:border-solid">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
