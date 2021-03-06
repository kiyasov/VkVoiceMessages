import React from "react";

import { Layout } from "antd";

const { Footer, Content } = Layout;

import Header from "./Header";

import "antd/dist/antd.css";

export default function MainLayout({ children }) {
  return (
    <Layout
      style={{
        background: "#fff"
      }}
    >
      <Header />
      <Content
        style={{
          padding: "24px 0",
          margin: "0 auto"
        }}
      >
        {children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: 80
        }}
      >
        2019 © kiyasov.ru
      </Footer>
    </Layout>
  );
}
