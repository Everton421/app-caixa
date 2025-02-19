 
import Home from "@/app"
import { RenderItemConta } from "@/app/components/itemConta";
import Conta from "@/app/conta";
import {render} from '@testing-library/react-native'

describe('testando componente <Home/>',()=>{

   

    test('<renderItemConta/>',()=>{
        const { getByText } = render(<RenderItemConta conta="teste" movimentos="[{tipo:'e', valor:2 }]" saldo={0} />)
        
            const element = getByText('teste');
            expect(element).toBeTruthy();

    })

    


})  