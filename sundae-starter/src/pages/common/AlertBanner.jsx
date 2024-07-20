import Alert from "react-bootstrap/Alert";

export default function AlertBanner({ message, variant }) {
  const alertMessage =
    message || "An unexpected error occurred. Please try again later.";
  const alertVarriant = variant || "danger";

  return (
    <Alert variant={alertVarriant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
}
