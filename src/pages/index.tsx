import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Particles from "@site/@/components/magicui/particles";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary h-96 bg-gradient-to-r from-sky-800 to-sky-100 relative overflow-hidden",
        "p-10",
        styles.heroBanner
      )}
    >
      {/* Meteors Component in the background */}
      {/* <Meteors number={40} /> */}
      <Particles className="absolute top-0 left-0 w-full h-full" />
      <div className="container flex items-center relative z-10">
        <div className="flex-1">
          <Heading
            as="h1"
            className="text-3xl text-sky-950 font-bold 2xl:text-3xl md:text-2xl"
          >
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle mt-3 2xl:text-xl md:text-xl">
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className="button bg-white button--lg mt-5 text-sky-700 hover:text-white hover:bg-sky-800"
              to="/docs/Introduction"
            >
              View Documentation
            </Link>
          </div>
        </div>
        <img
          src="/img/undraw_weather_notification_re_3pad (1).svg"
          alt="Main Page"
          className="  ml-3 p-3 shadow-lg shadow-sky-300"
          width={500}
          height={500}
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
