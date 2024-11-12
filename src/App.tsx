import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import Footer from './Footer';

// Estilizando o Container para centralizar o conteúdo
const CenteredContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
  backgroundColor: '#121212',
  color: '#ffffff',
  padding: '20px',
  boxSizing: 'border-box',
});

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; title: string; completed: boolean }[]>([]);

  const addTask = (title: string) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CenteredContainer>
        <Typography variant="h4" gutterBottom>
          Dashboard de Tarefas
        </Typography>
        <AddTaskForm addTask={addTask} />
        <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
      </CenteredContainer>
      <Footer />
    </Box>
  );
};

export default App;