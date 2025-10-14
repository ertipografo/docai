import Header from "./Header";
import Container from "./Container";

export default function Archive({ setIsArchive }) {
  return (
    <Container
      setIsArchive={setIsArchive}
      main={
        <div className="bg-bg2 py-3">
          <Header />
        </div>
      }
    />
  );
}
