export const sendEmail = async (message: string, email: string) => {
  try {
    const res = await fetch("http://localhost:8080/index.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        email,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to send email");
    }

    await res.json();
  } catch (error) {
    console.error("Error while sending email:", error);
    throw new Error("Error while sending email");
  }
};
