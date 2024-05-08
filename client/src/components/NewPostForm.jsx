function NewPostForm(props) {
  return (
    <div>
      {props.loggedInStatus ? (
        <>
          <label htmlFor="newKwack">What do you want to Kwack today?</label>
          <textarea id="newKwack" className="textarea"></textarea>
          <br />
          <button>Kwack!</button>
        </>
      ) : (
        'log in to Kwack.'
      )}
    </div>
  );
}
export default NewPostForm;
