import Paragraph from "./Paragraph";
export default function BlogHeading({ title, author, className }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <Paragraph>Author: {author}</Paragraph>
    </div>
  );
}
