import Image from "next/image";
export default function BlogImage({ imageUrl, className }) {
  return (
    <div className={className}>
      <img src={imageUrl} alt="Blog Image" />
    </div>
  );
}
