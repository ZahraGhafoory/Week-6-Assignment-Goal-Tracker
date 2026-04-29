import { useContext, useState } from "react";
import { GoalsContext } from "../context/GoalsContext";
import {
  Typography,
  TextField,
  MenuItem,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";
import GoalCard from "../components/GoalCard";

function Goals() {
  const { goals, addProgress, deleteGoal } = useContext(GoalsContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  // FILTER + SEARCH + SORT
  let filtered = goals.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filter !== "all") {
    filtered = filtered.filter((g) => g.status === filter);
  }

  if (sort === "progress") {
    filtered.sort((a, b) => b.progress - a.progress);
  } else if (sort === "newest") {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        All Goals
      </Typography>

      {/* SEARCH + SORT */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 2 }}>
        <TextField
          label="Search goals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />

        <TextField
          select
          label="Sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="progress">Progress</MenuItem>
        </TextField>
      </Stack>

      {/* FILTER TABS */}
      <Tabs
        value={filter}
        onChange={(e, newValue) => setFilter(newValue)}
        sx={{ mb: 3 }}
      >
        <Tab label="All" value="all" />
        <Tab label="Active" value="active" />
        <Tab label="Completed" value="completed" />
        <Tab label="Paused" value="paused" />
      </Tabs>

      {/* LIST */}
      {filtered.length === 0 ? (
        <Typography>No goals found.</Typography>
      ) : (
        filtered.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onProgress={addProgress}
            onDelete={deleteGoal}
          />
        ))
      )}
    </div>
  );
}

export default Goals;