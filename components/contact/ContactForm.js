import { useEffect } from 'react';
import { useState } from 'react';
import Notification from '../ui/notification';
import classes from './ContactForm.module.css';
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (status !== 'pending') {
      const timer = setTimeout(() => {
        setStatus('');
        setError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendContactData = async (contactDetail) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetail),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');
    try {
      await sendContactData({ email, name, message });
      setStatus('success');
      setEmail('');
      setName('');
      setMessage('');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  let notification;

  if (status === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }
  if (status === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }
  if (status === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: error,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
