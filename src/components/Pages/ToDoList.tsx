import { Box, Button, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useState } from "react";

interface Task {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: 'To Do' | 'In Progress' | 'Done';
}

export default function ToDoListComponent() {
    const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState<'To Do' | 'In Progress' | 'Done'>('To Do');
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const handleAddTask = () => {
    if (editTaskId !== null) {
      setTasks(
        tasks.map(task => 
          task.id === editTaskId ? { ...task, title, description, priority, status } : task
        )
      );
      setEditTaskId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), title, description, priority, status }]);
    }
    clearFields();
  };

  const clearFields = () => {
    setTitle('');
    setDescription('');
    setPriority('');
    setStatus('To Do');
  };

  const handleEditTask = (task: Task) => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setStatus(task.status);
    setEditTaskId(task.id);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container 
    sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }}
      >
        <Paper elevation={3} sx={{ padding: 4, maxWidth: '90%', minWidth: 300 }}>
        <Typography variant="h4" gutterBottom>
            Gerenciador de Tarefas
        </Typography>

        <Box display="flex" flexDirection="column" mb={2} gap= "20px">
          <TextField
            label="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
            margin="normal"
          />
          <Select
            value={priority}
            onChange={e => setPriority(e.target.value)}
            displayEmpty
            renderValue={priority ? undefined : () => <em>Prioridade</em>}
            margin="dense"
            sx={{marginBottom: "4%"}}
          >
            <MenuItem value="">Prioridade</MenuItem>
            <MenuItem value="Baixa">Baixa</MenuItem>
            <MenuItem value="Média">Média</MenuItem>
            <MenuItem value="Alta">Alta</MenuItem>
          </Select>
          <Select
            value={status}
            onChange={e => setStatus(e.target.value as 'To Do' | 'In Progress' | 'Done')}
            margin="dense"
          >
            <MenuItem value="">Progresso da Tarefa</MenuItem>
            <MenuItem value="To Do">A Fazer</MenuItem>
            <MenuItem value="In Progress">Em Andamento</MenuItem>
            <MenuItem value="Done">Concluído</MenuItem>
          </Select>
        </Box>
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          {editTaskId !== null ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
        </Button>

        <Paper elevation={3} style={{ marginTop: '16px', padding: '16px' }}>
        {tasks.map(task => (
          <Paper key={task.id} style={{ marginBottom: '16px', padding: '16px' }}>
            <Typography variant="h6">{task.title}</Typography>
            <Typography color="textSecondary">{task.description}</Typography>
            <Typography>Prioridade: {task.priority}</Typography>
            <Typography>Status: {task.status}</Typography>
            <Box mt={1}>
              <Button size="small" onClick={() => handleEditTask(task)}>Editar</Button>
              <Button size="small" color="error" onClick={() => handleDeleteTask(task.id)}>Deletar</Button>
            </Box>
          </Paper>
        ))}
      </Paper>
      </Paper>
    </Container>
  );
}