import { createContext } from "react";
import { useLocalStorage } from "../data/useLocalStorage";

export const GoalsContext = createContext();

export function GoalsProvider({ children }) {
  const [goals, setGoals] = useLocalStorage("goals", []);

  const addGoal = (goal) => {
    setGoals([
      ...goals,
      {
        ...goal,
        id: crypto.randomUUID(),
        progress: 0,
        status: "active",
        logs: [],
        createdAt: new Date().toISOString(),
      },
    ]);
  };
  
  const togglePause = (id) => {
    setGoals(
      goals.map((g) =>
        g.id === id
          ? {
              ...g,
              status: g.status === "paused" ? "active" : "paused",
            }
          : g
      )
    );
  };
  
  const markComplete = (id) => {
    setGoals(
      goals.map((g) =>
        g.id === id ? { ...g, status: "completed" } : g
      )
    );
  };
  
  const deleteGoal = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  const updateGoal = (updatedGoal) => {
    setGoals(goals.map((g) => (g.id === updatedGoal.id ? updatedGoal : g)));
  };

  const addProgress = (id, amount = 1) => {
    setGoals(
      goals.map((g) => {
        if (g.id === id) {
          const newProgress = g.progress + amount;
          return {
            ...g,
            progress: newProgress,
            status: newProgress >= g.target ? "completed" : g.status,
            logs: [...g.logs, { date: new Date().toISOString(), amount }],
          };
        }
        return g;
      })
    );
  };

  return (
    <GoalsContext.Provider 
    value={{ 
    goals, 
    addGoal, 
    deleteGoal, 
    updateGoal, 
    addProgress,
    togglePause,
    markComplete,
     }}> ....
      {children}
    </GoalsContext.Provider>
  );
}