const Sidebar = () => {
  const menus = ["Home", "Profile", "Settings", "Logout"];

  return (
    <aside>
      <ul>
        {menus.map(item=>{
          return (<li key={item}>{item}</li>)
        })}
        
      </ul>
    </aside>
  );
};

const Sidebar = () => {
  const menuItems = [
    { id: 1, text: "Home", icon: "🏠" },
    { id: 2, text: "Settings", icon: "⚙️" },
    { id: 3, text: "Like", icon: "❤️" }
  ];

  return (
    <ul>
       {menuItems.map((item)=>(
        (<li key={item.id}>{item.icon + item.text}</li>)
       ))
       }
       
    </ul>
  );
};