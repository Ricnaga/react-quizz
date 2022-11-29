import {
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

type CardFormProps = {
  name: string;
  onChange: (e: React.ChangeEvent) => void;
};

function CardEmail({ name, onChange }: CardFormProps) {
  return (
    <Card sx={{ padding: "2rem", margin: "2rem" }}>
      <TextField
        fullWidth
        type="email"
        label="E-mail"
        placeholder="Seu e-mail"
        name={name}
        onChange={onChange}
      />
      {/* <Form.Text muted>Esta pergunta é obrigatória</Form.Text> */}
    </Card>
  );
}

function CardName({ name, onChange }: CardFormProps) {
  return (
    <Card sx={{ padding: "2rem", margin: "2rem" }}>
      <TextField
        fullWidth
        type="text"
        label="Nome:"
        placeholder="Sua resposta"
        name={name}
        onChange={onChange}
      />
      {/* <Form.Text muted>Esta pergunta é obrigatória</Form.Text> */}
    </Card>
  );
}

function CardPhone({ name, onChange }: CardFormProps) {
  return (
    <Card sx={{ padding: "2rem", margin: "2rem" }}>
      <TextField
        fullWidth
        type="text"
        label={
          <Typography variant="subtitle1">
            Telefone DDD+CELULAR <strong>00 00000-0000</strong>
          </Typography>
        }
        placeholder="Sua resposta"
        name={name}
        onChange={onChange}
      />
      {/* <Form.Text muted>Esta pergunta é obrigatória</Form.Text> */}
    </Card>
  );
}

function CardUnderAge() {
  return (
    <Card sx={{ padding: "2rem", margin: "2rem" }}>
      <FormControl>
        <RadioGroup>
          <FormControlLabel
            value="overAge"
            control={<Radio />}
            label={
              <Typography variant="subtitle1">
                Sim, sou maior de 18 anos
              </Typography>
            }
          />
          <FormControlLabel
            value="underAge"
            control={<Radio />}
            label={<Typography variant="subtitle1">Não</Typography>}
          />
        </RadioGroup>
      </FormControl>
    </Card>
  );
}

export const CardForm = {
  Email: CardEmail,
  Name: CardName,
  Phone: CardPhone,
  UnderAge: CardUnderAge,
};
