import React, {useState} from 'react'
import { FormControl, FormLabel, Input, VStack, InputGroup , InputRightElement , Button } from '@chakra-ui/react'


const SignUp = () => {

    const [Name , setName] = useState('')
    const [Email , setEmail] = useState('')
    const [Passowrd , setPassword] = useState('')
    const [ConformPassowrd , setConformPassword] = useState('')
    const [show , setShow] = useState(false)

    const handleShow =() =>{
        setShow(!show)
    }

    const postPicture =(pic) =>{

        console.log('pic--->' , pic)
    }

    const submitHandler = () =>{
        console.log('Submited')
    }

  return (
    <VStack>
        <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
            placeholder='Please your Name..'
            onChange={(e)=>setName(e.target.value)}
            />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
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
        <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
            type={ show ? 'text' : 
            'password' }
            placeholder='Please Conform your Password..'
            onChange={(e)=>setConformPassword(e.target.value)}
            />
            <InputRightElement w={'4.5rem'}>
                <Button h='1.75rem' size={'sm'} color='black' onClick={handleShow}>

                    {show ? 'Hide' : 'Show'}

                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='pic'>

        <FormLabel>Upload your picture</FormLabel>
        <Input 
        type={'file'}
        p={'1.5'}
        accept='image/*'
        onChange={(e)=>postPicture(e.target.files[0])}

        />
        </FormControl>
        <Button
        onClick={submitHandler}
        w='100%'
        colorScheme={'whiteAlpha'}
        bg='whiteAlpha.900'
        color={'black'}
        style={{marginTop:15}}
        >
            Sign Up
        </Button>
    </VStack>
  )
}

export default SignUp