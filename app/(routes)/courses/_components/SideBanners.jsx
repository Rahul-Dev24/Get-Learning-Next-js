import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";

const SideBanners = () => {
  const [sideBannerList, setSideBannerList] = useState();
  useEffect(() => {
    getAllBanners();
  }, []);

  const getAllBanners = () => {
    GlobalApi.getSideBanner().then((res) => {
      setSideBannerList(res?.sideBanners);
    });
  };

  return (
    <div>
      {sideBannerList?.map((item, index) => (
        <div key={index}>
          <Image
            src={item?.banner?.url}
            width={500}
            height={300}
            onClick={() => window.open(item?.url)}
            className="rounded-xl cursor-pointer"
            alt="loading"
          />
        </div>
      ))}
    </div>
  );
};

export default SideBanners;
