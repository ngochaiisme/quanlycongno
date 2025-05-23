import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/dai-ca")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Ứng dụng quản lý công nợ.</h1>
      <p>Xin chào đại ca {name}.</p>
    </div>
  );
}

export default App;
