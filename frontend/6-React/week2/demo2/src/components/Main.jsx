import Home from "../views/Home";

const Main = ({store}) => {
  return (
    <main>
        <Home store ={store}/>
    </main>
  );
}   

export default Main;