import Paragraph from "./Paragraph";
export default function BlogContent({ contents, className }) {
  return (
    <>
      {contents &&
        contents.map((content) => (
          <Paragraph key={content} className={className}>
            {content}
          </Paragraph>
        ))}
    </>
  );
}
