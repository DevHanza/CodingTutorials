import { useNavigate } from "react-router";

function NavigateHome() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <h4>Fill this form before you go home.</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NavigateHome;
