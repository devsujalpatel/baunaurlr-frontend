import { Button } from "./ui/button";
import axios from "axios";

export const SignUpForm = () => {
  const submit = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: "John", // ✅ must match backend schema
          lastname: "Doe",
          email: "gB0wW@example.com",
          password: "password123",
        }),
        credentials: "include", // if you need cookies
      });

      const data = await response.json();
      console.log("Success:", data);
    } catch (err) {
      console.error("Network or fetch error:", err);
    }
  };

  return (
    <div>
      <Button onClick={submit}>Test</Button>
    </div>
  );
};
