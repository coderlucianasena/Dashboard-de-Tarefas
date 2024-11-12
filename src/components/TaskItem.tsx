import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@mui/material';
import styled from 'styled-components';

// Definindo o tipo para as props personalizadas
interface StyledListItemProps {
  completed: boolean;
}

interface TaskItemProps {
  task: { id: number; title: string; completed: boolean };
  toggleTaskCompletion: (id: number) => void;
}

export const darkTheme = {
    background: '#121212',
    text: '#ffffff',
    primary: '#bb86fc',
    secondary: '#03dac6',
    border: '#333',
    completedBackground: '#1e1e1e',
  };

// Usando o tipo StyledListItemProps para o componente estilizado
const StyledListItem = styled(ListItem)<StyledListItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: ${(props) => (props.completed ? '#e0ffe0' : '#fff')};
`;

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion }) => {
  return (
    <StyledListItem completed={task.completed}>
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <ListItemText primary={task.title} />
    </StyledListItem>
  );
};

export default TaskItem;