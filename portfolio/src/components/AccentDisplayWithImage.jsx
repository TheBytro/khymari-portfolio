function smallImageDisplay({imagepath, text, title}) {
  return (
    <section>
      <img src={imagepath} alt={title} />
      <div className="border">
        <p>{text}</p>
      </div>
    </section>
  );
}