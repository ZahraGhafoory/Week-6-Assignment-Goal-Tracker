import { Link } from "react-router-dom";
import { Card, CardContent, Typography, LinearProgress, Button, Stack } from "@mui/material";

function GoalCard({ goal, onProgress, onDelete }) {
  const percent = Math.min((goal.progress / goal.target) * 100, 100);

  return (
    <Card
    sx={{
      mb: 2,
      borderRadius: 3,
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    }}
  >
      <CardContent>
        <Typography variant="h6">{goal.title}</Typography>

        <Typography variant="body2" color="text.secondary">
          Category: {goal.category}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Progress: {goal.progress} / {goal.target}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={percent}
          sx={{ my: 2, height: 10, borderRadius: 5 }}
        />

        <Typography variant="body2" sx={{ mb: 2 }}>
          Status: {goal.status}
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained"
          onClick={() => 
          onProgress(goal.id)}>
            + Progress
          </Button>

          <Button
        variant="outlined"
        color="error"
        sx={{
        background: "rgba(255, 99, 71, 0.5)",
        color: "red",
        border: "1px solid red",
        margin: 3,
        "&:hover": {
         color: "white",
         background: "rgba(255, 99, 71, 0.5)",
         border: "1px solid red",
        }
        }}
      
        onClick={() => onDelete(goal.id)}
          >
           Delete
           </Button>
          <Button component={Link} to={`/goals/${goal.id}`}>
            View Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default GoalCard;