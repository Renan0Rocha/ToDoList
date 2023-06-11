'use client';
import { createContext } from 'react'
import * as React from 'react';
import styles from '../app/page.module.css';
import { theme } from '../theme/theme';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AddTask from '@/components/AdicionarTarefa.tsx/AddTask';
import TodoList from '@/components/ToDoList/TodoList';





export default function TarefaPage() {

    return (

        <main className={styles.main}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 1000,
                        height: 'auto',

                    },
                }}
            >
                <Paper sx={{
                    backgroundColor: "white",
                    textAlign: "center"
                }}
                    elevation={3}>

                    <h1>Todo List App</h1>

                    <AddTask/>
                    <TodoList/>
                </Paper>

            </Box>
            


        </main>

    )
}
