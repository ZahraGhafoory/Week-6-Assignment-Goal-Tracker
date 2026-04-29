import { useContext } from "react";
import { GoalsContext } from "../context/GoalsContext";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import GoalCard from "../components/GoalCard";

function Dashboard() {
  const { goals, addProgress, deleteGoal } = useContext(GoalsContext);

  const totalGoals = goals.length;
  const completedGoals = goals.filter((g) => g.status === "completed").length;
  const xpTotal = goals.reduce((sum, g) => sum + g.logs.length * 20, 0);
  const streak = goals.reduce((max, g) => Math.max(max, g.logs.length), 0);

  const completionRate = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Completion</Typography>
              <Typography>{completionRate}% complete</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Completed Goals</Typography>
              <Typography>{completedGoals}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
           <CardContent>
             <Typography variant="h6">Streak</Typography>
             <Typography>{streak} days</Typography>
           </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">XP Points</Typography>
              <Typography>{xpTotal}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Action */}
      <Button
        variant="contained"
        component={Link}
        to="/goals/new"
        sx={{ mb: 3 }}
      >
        + New Goal
      </Button>

      {/* Goals List */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Active Goals
      </Typography>

      {goals.length === 0 ? (
        <Typography>No goals yet. Add one!</Typography>
      ) : (
        goals.map((goal) => (
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

export default Dashboard;