import { useContext } from "react";
import { GoalsContext } from "../context/GoalsContext";
import { Grid, Card, CardContent, Typography } from "@mui/material";

function Categories() {
  const { goals } = useContext(GoalsContext);

  // Group goals by category
  const categories = {};

  goals.forEach((g) => {
    if (!categories[g.category]) {
      categories[g.category] = {
        total: 0,
        completed: 0,
      };
    }

    categories[g.category].total++;

    if (g.status === "completed") {
      categories[g.category].completed++;
    }
  });

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Categories
      </Typography>

      <Grid container spacing={2}>
        {Object.keys(categories).length === 0 ? (
          <Typography>No categories yet.</Typography>
        ) : (
          Object.entries(categories).map(([name, data]) => (
            <Grid item xs={12} md={4} key={name}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{name}</Typography>
                  <Typography>Total Goals: {data.total}</Typography>
                  <Typography>
                    Completed: {data.completed}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default Categories;