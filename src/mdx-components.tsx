import type { MDXComponents } from "mdx/types";
import { HighLightedText } from "@/components";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    strong: ({ children }) => (
      <strong style={{ color: "var(--foreground-hex)" }}>{children}</strong>
    ),
    h1: ({ children }) => (
      <h1 style={{ color: "var(--foreground-hex-intense)", fontSize: "2rem" }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ color: "var(--foreground-hex-intense)" }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ color: "var(--foreground-hex-intense)" }}>{children}</h3>
    ),
    p: ({ children }) => <p style={{ fontSize: "1rem" }}>{children}</p>,
    a: ({ href, children }) => (
      <a href={href} style={{ textDecoration: "underline" }}>
        {children}
      </a>
    ),
    pre: ({ children }) => (
      <pre
        style={{
          padding: "2rem 0",
          maxWidth: "42rem",
          background: "var(--foreground-hex)",
          color: "var(--background-hex)",
          borderRadius: "1rem",
        }}
      >
        {children}
      </pre>
    ),
    HighLightedText,
    ...components,
  };
}
