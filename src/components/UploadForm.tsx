import React, { useState } from 'react';
import './UploadForm.css';

interface SocialMediaProfile {
  platform: string;
  username: string;
}

interface UploadFormState {
  files: File[];
  emails: string[];
  phoneNumbers: string[];
  socialMediaProfiles: SocialMediaProfile[];
}

const UploadForm: React.FC = () => {
  const [formState, setFormState] = useState<UploadFormState>({
    files: [],
    emails: [],
    phoneNumbers: [],
    socialMediaProfiles: [],
  });
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newSocialUsername, setNewSocialUsername] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('Twitter');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFormState(prev => ({
        ...prev,
        files: Array.from(event.target.files!)
      }));
    }
  };

  const addEmail = () => {
    if (newEmail && !formState.emails.includes(newEmail)) {
      setFormState(prev => ({
        ...prev,
        emails: [...prev.emails, newEmail]
      }));
      setNewEmail('');
    }
  };

  const addPhone = () => {
    if (newPhone && !formState.phoneNumbers.includes(newPhone)) {
      setFormState(prev => ({
        ...prev,
        phoneNumbers: [...prev.phoneNumbers, newPhone]
      }));
      setNewPhone('');
    }
  };

  const addSocialProfile = () => {
    if (newSocialUsername) {
      setFormState(prev => ({
        ...prev,
        socialMediaProfiles: [...prev.socialMediaProfiles, {
          platform: selectedPlatform,
          username: newSocialUsername
        }]
      }));
      setNewSocialUsername('');
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formState);
    // Handle form submission logic here
  };

  const handleRerun = () => {
    // Handle rerun logic here
    console.log('Rerunning with current data:', formState);
  };

  return (
    <div className="upload-form">
      <h2>Upload Files</h2>
      
      <div className="section">
        <h3>Upload ID Documents</h3>
        <div className="file-input">
          <button className="choose-files">Choose Files</button>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="file-input"
          />
          <span>{formState.files.length > 0 ? 
            `${formState.files.length} file(s) selected` : 
            'No file chosen'}
          </span>
        </div>
      </div>

      <div className="section">
        <h3>Optional Fields</h3>
        
        <div className="subsection">
          <h4>Emails</h4>
          <div className="input-group">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Add email"
            />
            <button onClick={addEmail} className="add-button">Add</button>
          </div>
          {formState.emails.map((email, index) => (
            <div key={index} className="item">{email}</div>
          ))}
        </div>

        <div className="subsection">
          <h4>Phone Numbers</h4>
          <div className="input-group">
            <input
              type="tel"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              placeholder="Add phone (with country code, e.g., +15552227799)"
            />
            <button onClick={addPhone} className="add-button">Add</button>
          </div>
          {formState.phoneNumbers.map((phone, index) => (
            <div key={index} className="item">{phone}</div>
          ))}
        </div>

        <div className="subsection">
          <h4>Social Media Profiles</h4>
          <div className="input-group">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="Twitter">Twitter</option>
              <option value="Facebook">Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Instagram">Instagram</option>
            </select>
            <input
              type="text"
              value={newSocialUsername}
              onChange={(e) => setNewSocialUsername(e.target.value)}
              placeholder="Username or URL"
            />
            <button onClick={addSocialProfile} className="add-button">Add</button>
          </div>
          {formState.socialMediaProfiles.map((profile, index) => (
            <div key={index} className="item">
              {profile.platform}: {profile.username}
            </div>
          ))}
        </div>
      </div>

      <div className="button-group">
        <button onClick={handleSubmit} className="submit-button">Run</button>
        <button onClick={handleRerun} className="rerun-button">Rerun</button>
      </div>
    </div>
  );
};

export default UploadForm; 