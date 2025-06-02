import { CDN_URL } from "../../src/utils/contant"; 



const ResturantCard = (props) => {
  const { resData } = props;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg shadow-md h-[485px] hover:bg-gray-300">
      {/* Ensure that CDN_URL and cloudinaryImageId are correctly used */}
      <img className="rounded-lg" src={CDN_URL + resData.cloudinaryImageId} alt={resData.name} />
      <h3 className="font-bold pr-2 py-2 text-lg">{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4> {/* Join cuisines if it's an array */}
      <h4>{resData.avgRating}</h4>
      <h4>{
resData.costForTwo
}</h4>
    </div>
  );
};
export const withpromotedlabel=(ResturantCard)=>{
  return(props)=>{
    return(
      <div>
        <label>Promoted</label>
        <ResturantCard {...props}/>
      </div>
    );
  };
};


export default ResturantCard;
