import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Layout } from "../layout/Layout";
import { SEO, structuredDataTemplates } from "../utils/seo";

const faqs = [
  {
    q: "¿Qué rentabilidad es buena para un inmueble en alquiler en España?",
    a: "Depende de la zona y del riesgo que quieras asumir, pero de forma general muchos inversores buscan una rentabilidad neta por encima del 4–5% y un Cash-on-Cash mínimo del 6%.",
  },
  {
    q: "¿Qué gastos debo tener en cuenta al calcular la rentabilidad?",
    a: "Además de la hipoteca, debes considerar IBI, comunidad, seguros, mantenimiento, posibles gastos de gestión y suministros si los asumes como propietario.",
  },
  {
    q: "¿Cómo afecta el tipo de interés de la hipoteca a la rentabilidad?",
    a: "Cuanto mayor es el tipo de interés, mayor será la cuota de la hipoteca y menor el cash flow. Un cambio pequeño en el tipo puede tener un impacto importante en la rentabilidad.",
  },
  {
    q: "¿Qué diferencia hay entre rentabilidad bruta y neta?",
    a: "La rentabilidad bruta solo compara la renta anual con el precio de compra. La rentabilidad neta descuenta los gastos recurrentes del inmueble, por lo que es una medida más realista.",
  },
  {
    q: "¿Qué es el Cash-on-Cash?",
    a: "Es la relación entre el beneficio anual en efectivo (cash flow) y el capital que has aportado. Permite comparar inversiones con distinto nivel de apalancamiento.",
  },
  {
    q: "¿Es gratis la calculadora de rentabilidad?",
    a: "Sí, nuestra calculadora de rentabilidad de alquiler es 100% gratuita. No necesitas registrarte ni pagar para usarla. Todos los cálculos y resultados son completamente gratis.",
  },
  {
    q: "¿Cómo usar la calculadora de rentabilidad alquiler gratuita?",
    a: "Es muy sencillo: introduce el precio de compra del inmueble, los datos de tu hipoteca (si la hay), la renta mensual esperada y los gastos asociados. La calculadora te mostrará automáticamente el cash flow, ROI, TIR y otros indicadores clave.",
  },
];

export function FaqPage() {
  const faqStructuredData = structuredDataTemplates.faqPage(
    faqs.map((faq) => ({
      question: faq.q,
      answer: faq.a,
    }))
  );

  return (
    <Layout>
      <SEO
        title="Preguntas Frecuentes - Calculadora Rentabilidad Alquiler"
        description="Preguntas frecuentes sobre cómo calcular la rentabilidad de un inmueble en alquiler en España. Resuelve tus dudas sobre gastos, hipoteca, cash flow, ROI y más con nuestra calculadora gratuita."
        keywords="calculadora rentabilidad preguntas, como calcular rentabilidad alquiler, gastos inmueble alquiler, rentabilidad neta bruta diferencia, cash on cash, calculadora gratuita alquiler"
        canonical="https://calculadora-de-rentabilidad.vercel.app/preguntas-frecuentes-rentabilidad-inmuebles"
        structuredData={faqStructuredData}
      />

      <Typography variant="h1" sx={{ fontSize: "1.75rem" }} gutterBottom>
        Preguntas Frecuentes sobre Rentabilidad de Alquiler
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Resolvemos las dudas más habituales sobre cómo calcular la rentabilidad
        de una inversión inmobiliaria en alquiler con nuestra calculadora
        gratuita.
      </Typography>

      {faqs.map((item, index) => (
        <Accordion key={item.q} defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {item.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Layout>
  );
}
