import { Typography, Box } from "@mui/material";
import { Layout } from "../layout/Layout";
import { SEO } from "../utils/seo";

export function AboutToolPage() {
  return (
    <Layout>
      <SEO
        title="Sobre la Calculadora - Herramienta Gratuita Rentabilidad Alquiler"
        description="Información sobre nuestra calculadora gratuita de rentabilidad de inmuebles en alquiler. Herramienta online para calcular ROI, cash flow y TIR de inversiones inmobiliarias en España. 100% gratis y sin registro."
        keywords="sobre calculadora rentabilidad, herramienta gratuita inversión inmobiliaria, calculadora alquiler gratis, información herramienta ROI"
        canonical="https://calculadora-de-rentabilidad.vercel.app/sobre-esta-herramienta"
      />

      <Typography variant="h1" sx={{ fontSize: "1.75rem" }} gutterBottom>
        Sobre esta Calculadora Gratuita
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          ¿Qué es esta herramienta?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Esta calculadora gratuita de rentabilidad de alquiler ha sido creada
          con el objetivo de ayudar a inversores inmobiliarios en España a
          entender mejor la rentabilidad aproximada de una inversión en un
          inmueble en alquiler. Puedes calcular ROI, TIR, cash flow, Cap Rate y
          otros indicadores clave sin coste alguno.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          ¿Es realmente gratis?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Sí, nuestra calculadora de rentabilidad de alquiler es 100% gratuita.
          No necesitas registrarte, pagar ni proporcionar datos personales.
          Todos los cálculos se realizan en tu navegador de forma instantánea y
          completamente gratis.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Aviso importante
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Los resultados son orientativos y se basan en los datos que
          introduces. No tienen en cuenta tu situación fiscal concreta ni
          posibles cambios futuros en tipos de interés, normativa o mercado
          inmobiliario.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Por tanto, no deben interpretarse como asesoramiento financiero,
          fiscal ni legal. Antes de tomar decisiones importantes de inversión,
          consulta siempre con profesionales especializados.
        </Typography>
      </Box>
    </Layout>
  );
}
