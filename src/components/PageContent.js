import React from 'react';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import { useStaticQuery, graphql } from 'gatsby';

export default function PageContent() {
  const { dataJson } = useStaticQuery(graphql`
    query TitleQuery {
      dataJson(fileRelativePath: { regex: "/index/g" }) {
        title
        description
        id
        fileRelativePath
        rawJson
      }
    }
  `);
  const [data] = useLocalJsonForm(dataJson, {
    label: 'Main page',
    fields: [
      {
        label: 'Title',
        name: 'rawJson.title',
        component: 'text',
      },
      {
        label: 'Description',
        name: 'rawJson.description',
        component: 'html',
      },
    ],
  });
  return (
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.description }} />
    </div>
  );
}
