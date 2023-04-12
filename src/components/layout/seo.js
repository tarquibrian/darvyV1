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
      {/* <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <meta property="og:url" content="https://tarquibrian.com/" />
      <meta property="og:image" content="https://tarquibrian.com/og.png" />
      <meta name="image" content="https://tarquibrian.com/og.png" /> */}

      <title>Brian Tarqui Rojas - Web Developer</title>
      <meta name="description" content="Brian Tarqui Rojas | Web Developer" />

      <meta property="og:url" content="https://www.tarquibrian.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Brian Tarqui Rojas | Web Developer" />
      <meta
        property="og:description"
        content="Brian Tarqui Rojas | Web Developer"
      />
      <meta property="og:image" content="https://tarquibrian.com/og.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tarquibrian.com" />
      <meta property="twitter:url" content="https://www.tarquibrian.com/" />
      <meta name="twitter:title" content="Brian Tarqui Rojas | Web Developer" />
      <meta
        name="twitter:description"
        content="Brian Tarqui Rojas | Web Developer"
      />
      <meta
        name="twitter:image"
        content="https://tarquibrian.com/og.png"
      ></meta>
    </Head>
  );
};

export default SEO;

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
