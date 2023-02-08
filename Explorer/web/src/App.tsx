import'./styles/global.css';


import { Habit } from "./components/Habit";


function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={10}/>
      <Habit completed={20}/>
      <Habit completed={30}/>
   
    </div>
  );
}

export default App;



//Componente : é Tudo aquilo que a gente quer Reaproveitar ou Isolar na nossa Aplicação
//propriedade: Uma Informação Eviada para Modificar um componente visual ou comportalmentalmente