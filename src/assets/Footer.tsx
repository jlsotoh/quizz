import Button from "@mui/material/Button";
import { useQuestionData } from "../hooks/useQuestionsData";
import { useQuestionStore } from "../store/questions";

export const Footer = () => {
  const { correct, incorrect, unAnswered } = useQuestionData();
  const reset = useQuestionStore((state) => state.reset);

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ？${unAnswered} sin responder `}</strong>
      <div style={{ marginTop: "16px" }}>
        <Button onClick={() => reset()}>Reiniciar</Button>
      </div>
    </footer>
  );
};
