import React from 'react';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import { useStaticQuery, graphql } from 'gatsby';

export default function PageContent() {
  const { dataJson } = useStaticQuery(graphql`
    query TitleQuery {
      dataJson(fileRelativePath: { regex: "/index/g" }) {
        title
        id
        fileRelativePath
        rawJson
      }
    }
  `);
  const [data] = useLocalJsonForm(dataJson, {
    label: 'Edit Title',
    fields: [
      {
        label: 'Title',
        name: 'title',
        description: 'Enter title',
        component: 'text',
      },
    ],
  });
  console.log({ data });
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
