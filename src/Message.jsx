function Message({ name, isSubmitted }) {
  return <h1>Hello {isSubmitted ? name : ""}</h1>;
}

export default Message;
