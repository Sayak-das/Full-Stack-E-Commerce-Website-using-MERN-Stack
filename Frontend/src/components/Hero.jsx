import { MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full pb-12">
      <div className="max_padd_container relative top-32 xs:top-52">
        <h1 className="h1 capitalize max-w-[37rem]">
          Digital Shopping Hub Junction
        </h1>
        <p className="text-grey-50  regular-16 mt-6 max-w-[33rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          id repudiandae distinctio est excepturi quos provident impedit
          corporis unde soluta ducimus, expedita illo dignissimos mollitia nisi
          vitae eligendi quasi, nemo molestiae. Excepturi, esse.
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <div className="bold-16 sm:bold-20">
            {" "}
            176k{" "}
            <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div>
        </div>
        <div className="max-xs:flex-col flex gap-2">
          <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
            Shop Now
          </NavLink>
          <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
            <MdOutlineLocalOffer className="text-2x1" />
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
