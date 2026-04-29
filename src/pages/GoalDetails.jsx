import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GoalsContext } from "../context/GoalsContext";
import {
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";

function GoalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    goals,
    addProgress,
    deleteGoal,
    togglePause,
    markComplete,
  } = useContext(GoalsContext);

  const goal = goals.find((g) => g.id === id);

  if (!goal) {
    return <Typography>Goal not found</Typography>;
  }

  const percent = Math.min((goal.progress / goal.target) * 100, 100);

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {goal.title}
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography>Category: {goal.category}</Typography>
          <Typography>Type: {goal.type}</Typography>
          <Typography>
            Progress: {goal.progress} / {goal.target}
          </Typography>

          <LinearProgress
            variant="determinate"
            value={percent}
            sx={{ my: 2 }}
          />

          <Typography>Status: {goal.status}</Typography>
        </CardContent>
      </Card>

      {/* ACTION BUTTONS */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button variant="contained" onClick={() => addProgress(goal.id)}>
          + Progress
        </Button>

        <Button
          variant="outlined"
          onClick={() => togglePause(goal.id)}
        >
          {goal.status === "paused" ? "Resume" : "Pause"}
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => markComplete(goal.id)}
        >
          Mark Complete
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            deleteGoal(goal.id);
            navigate("/goals");
          }}
        >
          Delete
        </Button>
      </Stack>

      {/* LOG HISTORY */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Progress History
      </Typography>

      {goal.logs.length === 0 ? (
        <Typography>No progress yet.</Typography>
      ) : (
        goal.logs.map((log, index) => (
          <Card key={index} sx={{ mb: 1 }}>
            <CardContent>
              <Typography>
                {new Date(log.date).toLocaleDateString()} — +{log.amount}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}

export default GoalDetails;