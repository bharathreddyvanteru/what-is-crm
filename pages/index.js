
import { Layout, Bio, SEO } from "@components/common";

export default function Home() {
  return (
    <Layout>
      <SEO title="What is CRM" />
      <h1> What is CRM ? </h1>
      <p> How to implement an efficient CRM system for your organisaiton ?
         Check this space to get latest updates on <a className="text-4xl font-bold text-yellow-600 font-display" href= "https://techcentred.com/top-5-best-crm-software-for-every-business/"> best crm softwares</a> Credits to <a href="https://techcentred.com">TechCentred</a></p>
    </Layout>
  );
}
