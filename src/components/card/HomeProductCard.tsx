import Image from "next/image";
import React from "react";
import Link from "next/link";

interface IHomeProductCard {
  type?: string;
  category: string;
  lists: any[];
  seeMoreLink: string;
}
function HomeProductCard({
  type = "quad",
  category,
  lists,
  seeMoreLink,
}: IHomeProductCard) {
  return (
    <div className="h-[460px] w-full bg-white border border-gray-300 shadow">
      <div className="header px-4 py-4">
        <h4 className="text-[22px] font-semibold">{category}</h4>
      </div>
      {type === "quad" ? (
        <div className="grid grid-cols-2 gap-4 px-3">
          {lists.map((list, index) => (
            <Link href={list.link} key={index}>
              <div className="group product1 w-full flex flex-col items-start">
                <div className="w-full h-[122px]">
                  <Image
                    width={100}
                    height={120}
                    src={list.image}
                    alt="product1"
                    className="mx-auto w-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium rounded-md bg-black text-white px-3 py-2 group-hover:opacity-25 transition-all duration-500">
                  {list.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-3">
          <Image
            width={100}
            height={120}
            src={lists[0].image}
            alt="product1"
            className="mx-auto w-full h-[328px] object-contain"
          />
        </div>
      )}
      <Link href={`${seeMoreLink}`}>
        <p className="mx-5 mt-6 font-semibold text-sm text-primary-blue">
          See more...
        </p>
      </Link>
    </div>
  );
}

export default HomeProductCard;
