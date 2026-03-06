function Footer() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer>
      <p>Date: {currentDate}</p>
      <p>Group Members: Andrew, Shiv</p>
    </footer>
  );
}

export default Footer;