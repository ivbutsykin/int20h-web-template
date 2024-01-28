import { Button, Stack, TextField } from "@mui/material";
import { formUserSchema } from "../../../constants/validation";
import Section from "../../molecules/Section/Section";
import { useFormik } from "formik";

function FormikAndYupSection({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formUserSchema,
    onSubmit,
  });

  return (
    <Section title="Formik and Yup">
      <Stack alignItems="center">
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <TextField
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Stack>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Section>
  );
}

export default FormikAndYupSection;
