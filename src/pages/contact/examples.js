import React from "react";
import Link from "gatsby-link";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
       
           This is an example site integrating Netlify’s form handling with Gatsby
          <Link to="/contact">Basic contact form</Link>
         <Link to="/contact/file-upload/">Form with file upload</Link>


      </Layout>
    );
  }
}