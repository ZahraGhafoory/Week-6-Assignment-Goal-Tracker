import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Stack } from "@mui/material";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(form.email, form.password);

    if (success) {
      navigate("/");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default Login;