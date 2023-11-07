import React, { useState } from 'react'
import NavBar from './components/NavBar'
import ProgressIcons from './components/ProgressIcons'
import FormName from './components/FormName'
import FormContact from './components/FormContact'

const App = () => {
  const [showFormName, setShowFormName] = useState(true);
  const [formData, setFormData] = useState(null);

  const handleSwitchForm = (data) => {
    setFormData(data)
    setShowFormName(!showFormName);
  };

  return (
    <>
    <NavBar/>
    <ProgressIcons/>
    {showFormName ? (
        <FormName onSwitchForm={handleSwitchForm()} />
      ) : (
        <FormContact onBack={() => handleSwitchForm(formData)} />
      )}
    </>
  )
}

export default App