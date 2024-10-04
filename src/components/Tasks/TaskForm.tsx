import React from 'react';
import { Box, TextField, Select, MenuItem, Button } from '@mui/material';

interface TaskFormProps {
    title: string;
    description: string;
    priority: string;
    status: 'Tarefas' | 'Em Progresso' | 'Feito';
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    setPriority: (value: string) => void;
    setStatus: (value: 'Tarefas' | 'Em Progresso' | 'Feito') => void;
    onSubmit: () => void;
    isEditMode: boolean;
}

export default function TaskForm ({
    title,
    description,
    priority,
    status,
    setTitle,
    setDescription,
    setPriority,
    setStatus,
    onSubmit,
    isEditMode
} :TaskFormProps) {
    return (
        <Box display="flex" flexDirection="column" gap="20px">
            <TextField
                label="Título"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
                size="small"
            />
            <TextField
                label="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)}
                size="small"
            />
            <Select
                value={priority}
                onChange={e => setPriority(e.target.value)}
                displayEmpty
                renderValue={priority ? undefined : () => <em>Prioridade</em>}
                size="small"
            >
                <MenuItem value="Baixa">Baixa</MenuItem>
                <MenuItem value="Média">Média</MenuItem>
                <MenuItem value="Alta">Alta</MenuItem>
            </Select>
            <Select
                value={status}
                onChange={e => setStatus(e.target.value as 'Tarefas' | 'Em Progresso' | 'Feito')}
                displayEmpty
                size="small"
                renderValue={priority ? undefined : () => <em>Progresso da Tarefa</em>}
            >
                <MenuItem value="Tarefas">A Fazer</MenuItem>
                <MenuItem value="Em Progresso">Em Andamento</MenuItem>
                <MenuItem value="Feito">Concluído</MenuItem>
            </Select>
            <Button variant="contained" color="primary" onClick={onSubmit}>
                {isEditMode ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
            </Button>
        </Box>
    );
};
