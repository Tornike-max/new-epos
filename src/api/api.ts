import axios from "axios";

export const sendEmail = async (message: string, email: string) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/index.php",
      {
        message,
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to send email");
    }

    return response.data;
  } catch (error) {
    console.error("Error while sending email:", error);
    throw new Error("Error while sending email");
  }
};
