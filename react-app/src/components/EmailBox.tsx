import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';

function EmailBox() {
  const [email, setEmail] = React.useState('');
  const [content, setContent] = React.useState('');
  var templateParams = {
    from_name: email,
    message: content,
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSend = () => {
    console.log(email);
    console.log(content);
    emailjs.send('service_b5askzx', 'template_ans99ka', templateParams, '9Hz9YWxqRmXmkWbBz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <h2 className="emailbox-title">Vous souhaitez bénéficier de mon accompagnement ?</h2>
      <TextField
        fullWidth
        size="small"
        id="outlined-name"
        label="Votre E-mail"
        value={email}
        onChange={handleChangeEmail}
      />
      <TextField
          margin="dense"
          fullWidth
          id="outlined-multiline-static"
          multiline
          rows={4}
          onChange={handleChangeContent}
      />
      <Button variant="contained" color="primary" onClick={() => handleSend()} size="small" >Envoyer</Button>
    </div>
  );
}

export default EmailBox;