import { ISection } from "./interfaces";

import prod1 from "../assets/images/image-product-1.jpg";
import prod2 from "../assets/images/image-product-2.jpg";
import prod3 from "../assets/images/image-product-3.jpg";
import prod4 from "../assets/images/image-product-4.jpg";

import prodThumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import prodThumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import prodThumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import prodThumb4 from "../assets/images/image-product-4-thumbnail.jpg";

export const DummyProd = {
  text: "Sneaker Company",
  title: "Fall Limited edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  discPrice: "$125.00",
  fullPrice: "$250.00",
  discPerc: "50%",
};

export const ProdDatas = {
  productsImages: [prod1, prod2, prod3, prod4],
  prodThumbs: [prodThumb1, prodThumb2, prodThumb3, prodThumb4],
};

export const sectionList: ISection[] = [
  { link: "#collections", title: "collections" },
  { link: "#mens", title: "mens" },
  { link: "#women", title: "women" },
  { link: "#about", title: "about" },
  { link: "#contact", title: "contact" },
];
