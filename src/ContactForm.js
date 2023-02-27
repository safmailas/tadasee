import { useForm, ValidationError } from '@formspree/react';
import ContactForm from './ContactForm'; // <-- import the form component
import logo from './logo.svg';
import './App.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mayzjnog');

  if (state.succeeded) {
    return <p>We've received your submission. Thank you!</p>;
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input id="name" type="text" name="name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}