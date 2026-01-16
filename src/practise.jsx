
export default function Product ({title,price}) {
return (
    <div>
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
)
}

const Button = ({children}) => {
  return (
    <button className="btn-primary">
     {children}
      
    </button>
  );
};

export default function App() {
  return (
    <Button>
      Click Me <span>🚀</span>
    </Button>
  );
}