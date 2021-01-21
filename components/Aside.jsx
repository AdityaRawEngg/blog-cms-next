import Paragraph from "../components/Paragraph";

export default function Aside({ id, title, image, className, renderBlog }) {
  return (
    <div onClick={renderBlog} className={className} id={id}>
      <img src={image} alt="Blog Image" />
      <Paragraph>{title}</Paragraph>
    </div>
  );
}
