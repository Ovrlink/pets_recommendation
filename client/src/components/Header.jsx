import logoImg from "../assets/logo.jpg";

export default function Header({ text }) {
  return (
    <header>
      <img src={logoImg} alt="A paw of animal" />
      <h1>{text}</h1>
    </header>
  );
}
