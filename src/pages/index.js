import React from 'react';
import { graphql } from 'gatsby';
import PageContent from '../components/PageContent';

export default function index({ data }) {
  return (
    <div>
      <h1>{data.dataJson.title}</h1>
      <PageContent {...data} />
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    dataJson(fileRelativePath: { regex: "/index/g" }) {
      title
      id
      fileRelativePath
      rawJson
    }
  }
`;
