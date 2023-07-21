import './App.css';
function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='Avatar midudev'
          src='https://unavatar.io/midudev'
        />
        <div className='tw-followCard-info'>
          <strong>Miguel Angel Duran</strong>
          <span className='tw-followCard-infoUserName'>@midudev</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  );
}

export default App;
