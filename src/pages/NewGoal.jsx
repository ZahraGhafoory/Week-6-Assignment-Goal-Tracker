import { useState, useContext } from "react";
import { GoalsContext } from "../context/GoalsContext";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Stack,
} from "@mui/material";

function NewGoal() {
  const { addGoal } = useContext(GoalsContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    type: "daily",
    target: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!form.title || !form.category || !form.target) {
      alert("Please fill all required fields");
      return;
    }

    addGoal({
      ...form,
      target: Number(form.target),
    });

    navigate("/"); // go back to dashboard
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Create New Goal
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <TextField
            label="Category"
            name="category"
            select
            value={form.category}
            onChange={handleChange}
            required
          >
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Study">Study</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
          </TextField>

          <TextField
            label="Goal Type"
            name="type"
            select
            value={form.type}
            onChange={handleChange}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="count">Count-based</MenuItem>
            <MenuItem value="time">Time-based</MenuItem>
          </TextField>

          <TextField
            label="Target (number)"
            name="target"
            type="number"
            value={form.target}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="contained">
            Create Goal
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default NewGoal;