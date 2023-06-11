import React from "react";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Add from '@mui/icons-material/Add';

const AddTask = () => {
    return <div>
        <Button variant="contained" endIcon={<AddIcon />}>
            Adicionar Tarefa
        </Button>
    </div>;
};

export default AddTask;