import { Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Layout } from "../layout/Layout";

export function AboutToolPage() {
  return (
    <Layout>
      <Helmet>
        <title>Sobre esta herramienta | Rentabilidad inmueble</title>
        <meta
          name="description"
          content="Información sobre la calculadora de rentabilidad de inmuebles en alquiler. Uso orientativo y sin garantías, no es asesoramiento financiero."
        />
      </Helmet>

      <Typography variant="h4" gutterBottom>
        Sobre esta herramienta
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Esta calculadora ha sido creada con el objetivo de ayudarte a entender
        mejor la rentabilidad aproximada de una inversión en un inmueble en
        alquiler en España.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Los resultados son orientativos y se basan en los datos que tú mismo
        introduces. No tienen en cuenta tu situación fiscal concreta ni posibles
        cambios futuros en tipos de interés, normativa o mercado inmobiliario.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Por tanto, no deben interpretarse como asesoramiento financiero, fiscal
        ni legal. Antes de tomar decisiones importantes de inversión, consulta
        siempre con profesionales especializados.
      </Typography>
    </Layout>
  );
}
