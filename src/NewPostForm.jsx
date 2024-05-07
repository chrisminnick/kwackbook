function NewPostForm() {
  return (
    <div>
      <label htmlFor="newKwack">What do you want to Kwack today?</label>
      <textarea id="newKwack" className="textarea"></textarea>
      <br />
      <button>Kwack!</button>
    </div>
  );
}
export default NewPostForm;
