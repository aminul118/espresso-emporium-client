import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png'
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'

const BannerCards = () => {
  return (
    <div className=" bg-[#ECEAE3] py-8">
      <div className="grid  xl:grid-cols-4 md:grid-cols-2 gap-6 container mx-auto px-4">
        <div>
          <img src={icon1} alt="" />
          <h3 className="font-rancho text-2xl">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={icon2} alt="" />
          <h3 className="font-rancho text-2xl">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={icon3} alt="" />
          <h3 className="font-rancho text-2xl">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={icon4} alt="" />
          <h3 className="font-rancho text-2xl">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerCards;
