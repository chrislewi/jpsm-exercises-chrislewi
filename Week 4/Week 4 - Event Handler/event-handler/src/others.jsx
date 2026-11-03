import { useState } from "react";

// function InteractiveButton() {
//   const [clickCount, setClickCount] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isPressed, setIsPressed] = useState(false);

//   const handleClick = () => {
//     setClickCount((prev) => prev + 1);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setIsPressed(false);
//   };

//   const handleMouseDown = () => {
//     setIsPressed(true);
//   };

//   const handleMouseUp = () => {
//     setIsPressed(false);
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     backgroundColor: isPressed ? "#0056b3" : isHovered ? "#0069d9" : "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transform: isPressed ? 'scale(0.95)' : 'scale(1)',
//     transition: "all 0.1s ease"
//   };

//   return (
//     <div>
//       <button
//         style={buttonStyle}
//         onClick={handleClick}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onMouseDown={handleMouseDown}
//         onMouseUp={handleMouseUp}
//       >
//         <b>Please DO NOT Click! 🤬 ({clickCount})</b>
//       </button>
//       <p style={{ color: "white", marginTop: "10px" }}>Status: {isPressed ? "Pressed" : isHovered ? "Hovered" : "Normal"}</p>
//     </div>
//   );
// }

// export default InteractiveButton;


// function KeyboardDemo() {
//   const [inputValue, setInputValue] = useState('');
//   const [keyLog, setKeyLog] = useState([]);
//   const [charCount, setCharCount] = useState(0);

//   const handleKeyDown = (e) => {
//     // Handle special keys
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       alert('You entered: ${inputValue}');
//     } else if (e.key === 'Escape') {
//       setInputValue('');
//       setCharCount(0);
//     } else if (e.ctrlKey && e.key === 'a') {
//       e.preventDefaults();
//       alert('Ctrl+A pressed!');  
//     }

//     // Log the key press
//     setKeyLog(prev => [...prev.slice(-4), e.key]);
//   };

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
//     setCharCount(value.length);
//   };

//   const handleKeyUp = (e) => {
//     console.log('Key released: ${e.key}');
//   };

//   return (
//     <div>
//       <h3>Keyboard Event Demo</h3>
//       <input
//       type="text"
//       value={inputValue}
//       onChange={handleChange}
//       onKeyDown={handleKeyDown}
//       onKeyUp={handleKeyUp}
//       placeholder="Type here... (Try Enter, Escape, Ctrl+A)"
//       />
//       <p>Character Count: {charCount}</p>
//       <p>Recent keys {keyLog.join(', ')}</p>"
//       <small>
//         Special comands:<br/>
//         - Enter: Show alert<br/>
//         - Escape: Clear input<br/>
//         - Ctrl+A: Special action<br/>
//       </small>
//     </div>
//   );
// }

// export default KeyboardDemo;


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  
  // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
};

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
    newErrors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is invalid.';
  }

  if (!formData.message.trim()) {
    newErrors.message = 'Message is required.';
  } else if (formData.message.length < 10) {
    newErrors.message = 'Message must be at least 10 characters.';
  }

  return newErrors;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setIsSubmitting(true);

  try {
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      message: '',
      subscribe: false
    });
  } catch (error) {
    alert('Submission failed. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

return (
  <form onSubmit={handleSubmit}>
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}    
          onChange={handleInputChange}
          style={{ borderColor: errors.name ? 'red' : 'initial' }}
        />
        </label>
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
    </div>

    <div>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={{ borderColor: errors.email ? 'red' : 'initial' }}
        />
      </label>
      {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>

      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            style={{ borderColor: errors.message ? 'red' : 'initial' }}
          />
        </label>
        {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleInputChange}
          />
          Subscribe to newsletter
        </label>
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
     </form>
);
}

export default ContactForm;