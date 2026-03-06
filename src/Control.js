import React, { useState } from 'react';

const Delete = ({ onDelete }) => {
  const [deleteId, setDeleteId] = useState('');

  const handleDelete = () => {
    if (deleteId) {
      onDelete(parseInt(deleteId));
      setDeleteId('');
    }
  };

  return (
    <div className="delete-component">
      <input
        type="text"
        placeholder="Enter ID to delete"
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const Controls = ({ onDelete, onSortByGroup, onSortById, onToggleView, viewMode }) => {
  return (
    <div className="controls">
      <Delete onDelete={onDelete} />
      <button onClick={onSortByGroup}>Sort by Group</button>
      <button onClick={onSortById}>Sort by ID</button>
      <button onClick={onToggleView}>
        {viewMode === 'grid' ? 'Switch to List' : 'Switch to Grid'}
      </button>
    </div>
  );
};

export default Controls;