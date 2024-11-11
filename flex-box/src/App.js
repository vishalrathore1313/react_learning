import './App.css'
function App() {
  return (
   <>

<form>
  <label className="name" htmlFor="name-field">
    Name:
    <input id="name-field" />
  </label>
  <label className="email" htmlFor="email-field">
    Email:
    <input id="email-field" type="email" />
  </label>
  <button>
    Submit
  </button>
</form>
   </>
  );
}

export default App;
