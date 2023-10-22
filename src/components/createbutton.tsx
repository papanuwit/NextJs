// components/CreateButton.tsx
import React from 'react';

interface CreateButtonProps {
  onCreatePost: () => void;
}

export default function CreateButton({ onCreatePost }: CreateButtonProps) {
  return (
    <div>
      <button onClick={onCreatePost}>Create Post</button>
    </div>
  );
}
