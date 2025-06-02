import { CDN_URL } from "../utils/contant";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-4  border-gray-200 border-b-2 text-left ">
          <div className="flex">
            <img src={CDN_URL+item.card.info.imageId} className="w-28 h-auto px-2" />
           <button className="bg-slate-50 shadow-lg absolute my-12 mx-14 rounded-sm text-sm p-2" > Add+</button>
            <div>
               
            <span className="font-semibold mx-3 py-2">{item.card.info.name}</span>
            <span className="px-2"> ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}</span>
            </div>
            <p className="text-xs px-2">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
