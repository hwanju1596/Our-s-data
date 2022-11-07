import Head from "next/head";
import styles from "../styles/Home.module.css";
import CircleVisualization from "../components/circle-virtualization";
import Header from "./layout/header";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl">
        <Header />
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "120vh",
            backgroundColor: "gray",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Container>
    </div>
  );
}