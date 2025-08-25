import React from 'react';

const ComponenteHub = () => {
 
  const tarefas = ['Estudar React', 'Fazer o PI', 'Tomar café'];

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <ul>
        
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>  
        ))}
      </ul>
    </div>
  );
}

export default ComponenteHub;
