import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Markdown = ({ children }: { children: string }) => {
  return (
    <>
      <style>
        <>
          {`
            .markdown li p {
              padding: 0;
              display: inline;
            }
          `}
        </>
      </style>
      <ReactMarkdown
        className="markdown select-none"
        remarkPlugins={[remarkGfm]}
        skipHtml={false}
        components={{
          // We can do all styling for markdown content here
          p: ({ children }) => <p className="text-sm py-1.5 my-0">{children}</p>,
          ol: ({ children }) => (
            <ol className="list-decimal pl-4 list-outside">{children}</ol>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-4 list-inside">{children}</ul>
          ),
          li: ({ children }) => <li className="text-sm">{children}</li>,
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-[#f6eca3] cursor-pointer underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src?.replace("../../../public/", import.meta.env.BASE_URL || "./")}
              alt={alt}
              className="w-full border border-brand-pink-500/75 shadow-md rounded my-1"
            />
          ),
          h1: ({ children }) =>
            <h1 className="text-xl font-semibold leading-none tracking-tight text-white pb-2">{children}</h1>,
          h2: ({ children }) =>
            <h2 className="text-lg font-semibold leading-none tracking-tight text-white py-2">{children}</h2>,
        }}
      >
        {children}
      </ReactMarkdown>
    </>
  );
};