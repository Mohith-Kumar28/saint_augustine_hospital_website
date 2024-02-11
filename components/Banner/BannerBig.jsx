import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { base64StringToBlob } from "blob-util"; // You may need to install this library if you haven't already

const SheetData = () => {
  const [banners, setbanners] = useState([]);

  useEffect(() => {
    const asyncFetch = async () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJLF_0bF1me6m9VzZU272blgJ3Ncaxj_JWnITt_KYV-gyV3qkgrFvct4j1PLzYqLfxBPXn5Dgg6pvS/pub?output=csv";
      try {
        const response = await fetch(csvUrl);
        const text = await response.text();
        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            const bannersWithImages = result.data.map((banner) => {
              try {
                const imageData = banner.image; // Assuming the column is named "Image"
                const blob = base64StringToBlob(imageData);
                const imageUrl = URL.createObjectURL(blob);
                return {
                  ...banner,
                  image: imageUrl,
                };
              } catch (error) {
                console.error("Error processing image data:", error);
                return banner; // Return the original banner object if an error occurs
              }
            });
            console.log("Banners with images:", bannersWithImages);
            setbanners(bannersWithImages);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV data:", error);
      }
    };

    asyncFetch();
  }, []);

  return (
    <>
      {banners && banners.length !== 0 && (
        <div className="flex flex-col my-20">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="flex border border-orange-400 bg-orange-50 rounded-lg p-4 m-4"
            >
              {/* <img src={banner.image} alt="Image" className="w-full h-auto" /> */}
              <div className="">
                <h2 className="font-extrabold text-xl">
                  {banner.heading && banner.heading}
                </h2>
                <p className=" font-bold text-base">{banner.content}</p>{" "}
              </div>
              {/* Assuming the content is stored in a column named "Content" */}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SheetData;
