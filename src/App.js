import React, {useState} from 'react';
import UserForm from './components/userForm';
import Welcome from './components/welcome';
import UserPosts from './components/userPosts';
import './App.css';

function App() {
  const [showUserForm, setShowUserForm] = useState(true);
  const [userInfo, setUserInfo] = useState('');

  const handleSubmitChange = ({firstName, lastName}) => {
    setShowUserForm(false);
    setUserInfo(`${firstName} ${lastName}`)
  }

  return (
    <div className="App">
      {showUserForm && <UserForm onSubmitForm={(data) => handleSubmitChange(data)} />}
      {showUserForm === false && <Welcome userInfo={userInfo} />}
      {showUserForm === false && <UserPosts />}
    </div>
  );
}

export default App;
