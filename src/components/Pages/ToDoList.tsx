import React from 'react';
import { Paper, Typography, TextField, Select, MenuItem, Button } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useState } from "react";

interface Task {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: 'Tarefa' | 'Em Progresso' | 'Feito';
}

export default function ToDoListComponent() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState<'Tarefa' | 'Em Progresso' | 'Feito'>('Tarefa');
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
        setStatus('Tarefa');
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

    const columns = ['Tarefas', 'Em Progresso', 'Feito'];

    return (
        <Container 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                maxHeight: '100%',
                overflowY: 'auto',
                marginTop: '5%',
                marginBottom: '5%',
                maxWidth: '90%',
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, maxWidth: '90%', minWidth: 300 }}>
                <Typography variant="h4" gutterBottom>
                    Gerenciador de Tarefas
                </Typography>

                <Box display="flex" flexDirection="column" mb={2} gap="20px">
                    <TextField
                        label="Título"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        margin="normal"
                        inputProps={{ maxLength: 50 }}
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
                        sx={{ marginBottom: "4%" }}
                    >
                        <MenuItem value="Baixa">Baixa</MenuItem>
                        <MenuItem value="Média">Média</MenuItem>
                        <MenuItem value="Alta">Alta</MenuItem>
                    </Select>
                    <Select
                        value={status}
                        onChange={e => setStatus(e.target.value as 'Tarefa' | 'Em Progresso' | 'Feito')}
                        margin="dense"
                        renderValue={priority ? undefined : () => <em>Progresso da Tarefa</em>}
                    >
                        <MenuItem value="To Do">A Fazer</MenuItem>
                        <MenuItem value="In Progress">Em Andamento</MenuItem>
                        <MenuItem value="Done">Concluído</MenuItem>
                    </Select>
                </Box>
                <Button variant="contained" color="primary" onClick={handleAddTask}>
                    {editTaskId !== null ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
                </Button>

                <Box display="flex" justifyContent="space-between" mt={3}>
                    {columns.map(column => (
                        <Paper key={column} elevation={3} sx={{ flex: 1, margin: '0 8px', padding: 2 }}>
                            <Typography variant="h5" gutterBottom>{column}</Typography>
                            <Box>
                                {tasks.filter(task => task.status === column).map(task => (
                                    <Paper 
                                        key={task.id} 
                                        style={{ 
                                            margin: '4px', 
                                            padding: '12px', 
                                            height: '200px',
                                            overflow: 'auto' 
                                        }}
                                    >
                                        <Typography variant="h6">
                                            {task.title.length > 50 ? `${task.title.slice(0, 50)}...` : task.title}
                                        </Typography>
                                        <Typography color="textSecondary">{task.description}</Typography>
                                        <Typography>Prioridade: {task.priority}</Typography>
                                        <Typography>Status: {task.status}</Typography>
                                        <Box mt={1}>
                                            <Button size="small" onClick={() => handleEditTask(task)}>Editar</Button>
                                            <Button size="small" color="error" onClick={() => handleDeleteTask(task.id)}>Deletar</Button>
                                        </Box>
                                    </Paper>
                                ))}
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Paper>
        </Container>
    );
}