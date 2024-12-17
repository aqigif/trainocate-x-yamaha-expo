import { useState } from "react";

const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    try {
      // api call
      // sortir data
      // show success
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    } catch (error) {
      // show error
    }
    console.log("ini email", email);
  };

  return { email, setEmail, handleSubmit, loading };
};

export default useSignIn;