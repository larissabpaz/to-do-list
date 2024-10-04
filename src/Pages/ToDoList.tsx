import React from 'react';
import { Paper, Typography, Button, Tooltip } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useState } from "react";
import TaskForm from '../components/Tasks/TaskForm';
import TaskModal from '../components/Tasks/TaskModal';
import EmptyState from '../components/EmptyState';
import ContentPasteOffOutlinedIcon from '@mui/icons-material/ContentPasteOffOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface Task {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: 'Tarefas' | 'Em Progresso' | 'Feito';
}

export default function ToDoListComponent() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState<'Tarefas' | 'Em Progresso' | 'Feito'>('Tarefas');
    const [editTaskId, setEditTaskId] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        setIsModalOpen(false);
    };

    const clearFields = () => {
        setTitle('');
        setDescription('');
        setPriority('');
        setStatus('Tarefas');
    };

    const handleEditTask = (task: Task) => {
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
        setStatus(task.status);
        setEditTaskId(task.id);
        setIsModalOpen(true);
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const columns = ['Tarefas', 'Em Progresso', 'Feito'];

    const hasTasks = tasks.length > 0;

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
        }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: '90%', minWidth: 300, height: '100%'  }}>
                <Typography variant="h4" color="primary" gutterBottom>Gerenciador de Tarefas</Typography>
                <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)}>
                    Adicionar Tarefa
                </Button>
                
                <TaskModal 
                    open={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    title={editTaskId !== null ? 'Editar Tarefa' : 'Nova Tarefa'}
                >
                    <TaskForm
                        title={title}
                        description={description}
                        priority={priority}
                        status={status}
                        setTitle={setTitle}
                        setDescription={setDescription}
                        setPriority={setPriority}
                        setStatus={setStatus}
                        onSubmit={handleAddTask}
                        isEditMode={editTaskId !== null}
                    />
                </TaskModal>

                {hasTasks ? ( 
                    <Box display="flex" justifyContent="space-between" width="100%" height="50vh" mt={4} >
                        {columns.map(column => (
                            <Paper key={column} sx={{ flex: 1, margin: '0 4px', padding: 2, overflow: 'auto', minWidth:'24vh' }}>
                                <Typography >{column}</Typography>
                                <Box>
                                    {tasks.filter(task => task.status === column).map(task => (
                                        <Paper 
                                            key={task.id} 
                                            style={{ margin: '2px', padding: '12px', width: '100%', height: '100%', overflow: 'auto' }}
                                        >
                                            <Typography variant="h6">{task.title}</Typography>
                                            <Typography color="textSecondary">{task.description}</Typography>
                                            <Box mt={2} display="flex" justifyContent="space-between">
                                                <Tooltip title="Editar" arrow>
                                                <Button onClick={() => handleEditTask(task)}>
                                                    <EditOutlinedIcon/>
                                                </Button>
                                                </Tooltip>
                                                <Tooltip title="Apagar" arrow>
                                                <Button color="error" onClick={() => handleDeleteTask(task.id)}>
                                                    <DeleteOutlineOutlinedIcon/>
                                                </Button>
                                                </Tooltip>
                                            </Box>
                                        </Paper>
                                    ))}
                                </Box>
                            </Paper>
                        ))}
                    </Box>
                ) : (
                    <EmptyState 
                        message="Ops! Você ainda não criou uma tarefa." 
                        icon={<ContentPasteOffOutlinedIcon sx={{ fontSize: '5rem' }}/>} 
                    />
                )}
            </Paper>
        </Container>
    );
}
