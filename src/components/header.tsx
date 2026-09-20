function Header() {
  return (
    <header className="header">

      <div className="logo">
        <h2>Flavored ☕</h2>
        <p>Wake up to something special.</p>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#coffee">Coffee Menu</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <a href="#coffee" className="coffee-shop-button">
  Coffee Shop
</a>

    </header>
  );
}

export default Header;