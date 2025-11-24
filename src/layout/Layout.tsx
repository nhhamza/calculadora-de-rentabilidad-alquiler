import { Container, Box } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          py: { xs: 3, md: 5 }
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
