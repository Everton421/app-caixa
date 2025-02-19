 import Home from "@/app"
import Conta from "@/app/conta"
import { render } from "@testing-library/react-native"

describe('testando componente <Home/>',()=>{
    test('<Home/>', ()=>{
        render(<Home/>)
    })
})

 