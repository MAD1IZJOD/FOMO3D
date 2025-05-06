import { useState } from 'react';
import axios from 'axios';
import { useThree } from '@react-three/fiber';

export default function UploadModal({ onClose }) {
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState('');
  const { camera } = useThree();

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('userId', 'current_user'); // Replace with actual auth
    formData.append('location', location);

    try {
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onClose();
      window.location.reload();
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <div className="upload-modal">
      <div className="modal-content">
        <h2>Share FOMO</h2>
        <form onSubmit={handleUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <input
            type="text"
            placeholder="📍 Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}