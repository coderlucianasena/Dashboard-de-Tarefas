import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface AddTaskFormProps {
  addTask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Nova Tarefa"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#1976d2', // Azul padrão do Material-UI
              },
              '&:hover fieldset': {
                borderColor: '#115293', // Azul mais escuro ao passar o mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1976d2', // Azul quando focado
              },
              '& input': {
                color: '#1976d2', // Texto azul dentro do input
              },
            },
            '& .MuiInputLabel-root': {
              color: '#1976d2', // Cor do label
            },
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Adicionar
        </Button>
      </Box>
    </form>
  );
};

export default AddTaskForm;