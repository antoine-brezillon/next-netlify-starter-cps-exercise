import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import React, { useState, useEffect } from "react";
import DataVizList from "@components/DatavizList";

export default function Home() {
  const [submissionList, setSubmissionList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://phpstack-454602-4173726.cloudwaysapps.com/api/submissions",
        );

        const keysToKeep = [
          "field_dataviz_img",
          "field_dataviz_title",
          "field_dataviz_owner",
          "field_dataviz_country",
          "field_dataviz_prize",
          "field_dataviz_rankedprize",
          "field_dataviz_button",
        ];

        const submissionList = await response
          .json()
          .then((rawList) =>
            rawList.map((rawItem) =>
              Object.fromEntries(
                Object.entries(rawItem).filter(([key, value]) =>
                  keysToKeep.includes(key),
                ),
              ),
            ),
          );

        setSubmissionList(submissionList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Dataviz challenge 2023 list of submissions!" />
      {loading ? <div>Loading...</div> : <DataVizList list={submissionList} />}

      <Footer />
    </div>
  );
}
