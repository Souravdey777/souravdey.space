import { Poppins, Roboto, Permanent_Marker } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
});

export const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
