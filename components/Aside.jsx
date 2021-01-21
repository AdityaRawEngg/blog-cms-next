import Image from "next/image";
import Paragraph from "../components/Paragraph";

export default function Aside({ id, title, image, className, renderBlog }) {
  return (
    <div onClick={renderBlog} className={className} id={id}>
      <Image src={image} alt="Blog Image" height={300} width="" />
      <Paragraph>{title}</Paragraph>
    </div>
  );
}
