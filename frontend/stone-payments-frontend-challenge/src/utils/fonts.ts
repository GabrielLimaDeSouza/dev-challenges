import localFont from "next/font/local";

export const sharonSansRegular = localFont({
  src: [
    {
      path: "../fonts/SharonSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const sharonSansBold = localFont({
  src: [
    {
      path: "../fonts/SharonSans-Bold.otf",
      weight: "600",
      style: "bold",
    },
  ],
});

export const circularStd = localFont({
  src: [
    {
      path: "../fonts/CircularStd-Book.otf",
      weight: "450",
      style: "normal",
    },
  ],
});
