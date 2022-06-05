import React , {useState} from 'react'
import { FormControl, FormLabel, Input, VStack , InputGroup, InputRightElement, Button } from '@chakra-ui/react'



const Login = () => {

    const [Email , setEmail] = useState('')
    const [Passowrd , setPassword] = useState('')
    const [show , setShow] = useState(false)

    const handleShow =() =>{
        setShow(!show)
    }

    const submitHandler = () =>{
       setEmail('gammad@gmail.com')
       setPassword('12345')
    }

  return (
    <VStack>
        <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
            type={'email'}
            placeholder='Please your Email..'
            onChange={(e)=>setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
            type={ show ? 'text' : 
            'password' }
            placeholder='Please your Password..'
            onChange={(e)=>setPassword(e.target.value)}
            />
            <InputRightElement w={'4.5rem'}>
                <Button h='1.75rem' size={'sm'} color='black' onClick={handleShow}>

                    {show ? 'Hide' : 'Show'}

                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button
        onClick={submitHandler}
        w='100%'
        colorScheme={'whiteAlpha'}
        bg='whiteAlpha.900'
        color={'black'}
        style={{marginTop:15}}
        >
            Login
        </Button>
        <Button
        onClick={submitHandler}
        w='100%'
        colorScheme={'whiteAlpha'}
        bg='red.900'
        color={'black'}
        style={{marginTop:15}}
        >
           Login as Guest User
        </Button>
    </VStack>
  )
}

export default Login