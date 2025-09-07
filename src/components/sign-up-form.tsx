import { Button } from "./ui/button";
import axios from "axios";

export const SignUpForm = () => {
  const submit = async () => {
    try {
      const response = await fetch("https://bauna.me/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: "John", 
          lastname: "Doe",
          email: "gB0wW@example.com",
          password: "password123",
        }),
        credentials: "include",
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
