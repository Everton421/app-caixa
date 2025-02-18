import { Header } from "@/app/components/header"
import { render } from "@testing-library/react-native"

describe('testing header component',()=>{

    test('<Header/>',()=>{

        const { getByTestId   } = render(<Header arrowColor="#FFF" background="blue" /> )
    })  
})