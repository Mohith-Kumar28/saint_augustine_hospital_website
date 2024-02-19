import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { base64StringToBlob } from "blob-util";
import { FiXCircle } from "react-icons/fi";

const SheetData = () => {
  const [banners, setBanners] = useState([]);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const asyncFetch = async () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJLF_0bF1me6m9VzZU272blgJ3Ncaxj_JWnITt_KYV-gyV3qkgrFvct4j1PLzYqLfxBPXn5Dgg6pvS/pub?output=csv";
      try {
        const response = await fetch(csvUrl);
        const text = await response.text();
        console.log("CSV Text:", text); // Log the fetched CSV text
        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            console.log("Parsed Result:", result); // Log the parsed CSV result
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
                return banner;
              }
            });
            console.log("Banners with Images:", bannersWithImages); // Log the banners with images
            setBanners(bannersWithImages);
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

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {banners && banners?.length > 0 && showModal && (
        <div className="fixed z-50 md:w-1/2  bottom-10 left-0  flex items-center justify-center bg-opacity-50">
          <div className="bg-yellow-100 p-2 rounded-lg max-w-4xl">
            <div className="flex flex-col gap-6">
              {banners?.map((banner, index) => (
                <div
                  key={index}
                  className="flex border border-yellow-400 bg-orange-50 rounded-lg p-4 "
                >
                  {/* <img src={banner?.image} alt="Image" className="w-full h-auto" /> */}
                  <div className="">
                    <h2 className="font-extrabold text-xl">
                      {banner?.heading && banner?.heading}
                    </h2>
                    <p className=" font-bold text-base">{banner?.content}</p>{" "}
                  </div>
                  {/* Assuming the content is stored in a column named "Content" */}
                </div>
              ))}
            </div>
            <button
              onClick={closeModal}
              className=" bg-red-100 hover:bg-[#CCECEF]/70 absolute shadow-md top-4 right-4 rounded-full  text-red-600 font-bold p-1"
            >
              <FiXCircle className="text-3xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SheetData;
