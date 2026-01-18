export default function App() {
  
  // 1. Fonksiyonu burada tanımla
  const handleClick = () => {
    alert("clicked")
  }

  return (
    <div>
      {/* 2. onClick olayını butona bağla */}
      <button onClick={handleClick}>Tıkla Bana</button>
    </div>
  );
}