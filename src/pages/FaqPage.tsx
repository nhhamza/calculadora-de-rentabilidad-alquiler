import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Helmet } from "react-helmet-async";
import { Layout } from "../layout/Layout";

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
];

export function FaqPage() {
  return (
    <Layout>
      <Helmet>
        <title>
          Preguntas frecuentes sobre rentabilidad de inmuebles | Rentabilidad
          inmueble
        </title>
        <meta
          name="description"
          content="Preguntas frecuentes sobre cómo calcular la rentabilidad de un inmueble en alquiler, gastos a tener en cuenta, tipos de interés, rentabilidad bruta y neta."
        />
      </Helmet>

      <Typography variant="h4" gutterBottom>
        Preguntas frecuentes
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Resolvemos algunas de las dudas más habituales al analizar la
        rentabilidad de una inversión inmobiliaria en alquiler.
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
