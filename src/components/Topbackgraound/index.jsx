import { Background}  from "./styles"

import UserImage from "../../assets/users.png"


  function TopBackground(){

    return (
        <Background>
                <img src={UserImage} alt="iamgem-usuarios" />
        </Background>
    )
  }

  export default TopBackground