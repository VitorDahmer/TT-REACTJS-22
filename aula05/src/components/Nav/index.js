import { ContainerLogo, Logo } from "./styled";
const Nav = () =>{
    return (
        <div>
        <ContainerLogo>
          <Logo src="https://i.pinimg.com/originals/ea/10/72/ea10725c9063e64f80aa3889fcab9471.png" />
        </ContainerLogo>
        <ul>
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#"> Lista Filmes</a>
          </li>
          <li>
            <a href="#"> Cadastro</a>
          </li>
        </ul>
      </div>
    );
};

export default Nav;