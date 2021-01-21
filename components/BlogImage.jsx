import Image from "next/image";
export default function BlogImage({ imageUrl, className }) {
  return (
    <div className={className}>
      <Image
        src={imageUrl}
        alt="Blog Image"
        height={500}
        width={900}
        layout="responsive"
      />
    </div>
  );
}
