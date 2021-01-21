export default function Paragraph({ children, className, renderBlog }) {
  return (
    <p onClick={renderBlog} className={className}>
      {children}
    </p>
  );
}
