import Conta from "@/app/conta"
import { render } from "@testing-library/react-native"

describe('testando componente <Conta/>',()=>{
    test('<conta/>', ()=>{
        render(<Conta/>)
    })
})

