// useRef is used to reference a value that is not need to render
// To use it: const ref = useRef(initialValue)
// Returns: an OBJECT with a single property current
// To render: if want to render (a side effect) then use useEffect with it

/** ===
4. uncontrolled element (not controlled by React): useRef to create a reference to the element and access value by using like: nameRef.current.value
=== */

import { useEffect, useRef } from "react";

const RefForm = () => {
  // A. to get the cursor in the focused field
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    // B. use it to put focus on
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent automatic rendering

    // get the values of the fields as the user type them
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input
          ref={emailRef}
          defaultValue={"rojoni@sojoni.com"}
          type="email"
          name="email"
          id=""
        />
        <br />
        <input ref={passwordRef} type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
