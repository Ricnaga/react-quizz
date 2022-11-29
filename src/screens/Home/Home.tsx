import { useFormik } from "formik";
import { Button, Card, Grid } from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
import { QUESTIONS } from "../../application/routes/paths";
import { CardDescription } from "./CardDescription";
import { CardForm } from "./CardForm";
import { CardImg } from "./CardImg";

export function HomeScreen() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      nome: "",
      whatsapp: "",
    },
    onSubmit: (values) => {
      navigate({
        pathname: QUESTIONS,
        search: createSearchParams({
          email: values.email,
          nome: values.nome,
          whatsapp: values.whatsapp,
        }).toString(),
      });
    },
  });

  return (
    <Grid paddingX={50} paddingY={4}>
      <CardDescription />
      <form onSubmit={formik.handleSubmit}>
        <CardForm.Email name="email" onChange={formik.handleChange} />
        <CardImg />
        <CardForm.Name name="nome" onChange={formik.handleChange} />
        <CardForm.Phone name="whatsapp" onChange={formik.handleChange} />
        <CardForm.UnderAge />
        <Card sx={{ padding: "2rem", margin: "2rem" }}>
          <Button type="submit" variant="contained">
            Próxima
          </Button>
        </Card>
      </form>
    </Grid>
  );
}
