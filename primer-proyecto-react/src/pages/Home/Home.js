import "./Home.css";
export function Home(){
    return (
        <div className="container-home align-self-center">

            <div className="container-text">

            <h1 className="lh-lg text-center"> Proyect Rick & Morty</h1>
            <h2 className="lh-base text-center">Welcome to Rick & Morty Proyect!</h2>
            <p className="lh-lg text-center">This proyect was made for practising React and to made a functional website.</p>
            <p className="lh-1 text-center">In this website you can know information of the characters of this animated series.</p>
            <p className="lh-sm text-center"> Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion. </p>
            <h2 className="lh-lg text text-center">Lets go!</h2>

            <div className="container-buttons">
            <a className="boton text-center" href="./Character"> characters </a>
            <a className="boton text-center" href="./Contact"> contact </a>
            </div>

            </div>


        </div>
    )
}