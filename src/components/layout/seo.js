import Head from "next/head";
import React from "react";

const SEO = ({
  description = "Brian Tarqui Rojas | Web Developer",
  author = "Darvy",
  meta,
  title = "Brian Tarqui Rojas",
}) => {
  const metaData = [
    {
      name: `Brian Tarqui Rojas | Web Developer`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <meta
        property="og:image"
        content="https://tarquibrian.com/og.png"
        data-react-helmet="true"
      ></meta>
    </Head>
  );
};

export default SEO;

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
