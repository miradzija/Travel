export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Putuj🧳</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>Sta mi treba za put?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">LISTA</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>Imas X stvari na svojoj listi i vec si spakovao X (X%)</em>
    </footer>
  );
}
