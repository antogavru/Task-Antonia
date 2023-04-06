import React from 'react'
import {
    Text,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Flex,
    Center,
    Box
} from "@chakra-ui/react"
import Rating from '../Rating';

interface ImageInterface {
    url: string
}

interface CardProps {
    image: ImageInterface;
    title: string;
    countries: number;
    days: number;
    emissions: number;
    rate: number;
    key: number;
}

const CardComponent = (props: CardProps) => {
    return (
            <Card w={'30%'} backgroundImage={props.image.url} border='8px' borderRadius='25px' borderStyle={'solid'} borderColor='white'>
                <Center>
                    <CardHeader display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Heading size='md' color='white'> {props.title} </Heading>
                        <Text fontSize={12} color='white'> {props.countries} Countries, {props.days} Days</Text>
                    </CardHeader>
                </Center>
                <CardBody>
                    <Box borderRadius='md' bg='#2D3748' h={12} color='white' px={4}  display={'flex'} flexFlow={'row wrap'} alignItems={'center'}>
                        <Text fontSize={15} width={'70%'}>Emissions offset:</Text>
                        <Text flex={1}>{props.emissions} CO2e</Text>
                    </Box>
                </CardBody>
                <CardFooter backgroundColor='white' mx={10} borderRadius='25px 25px 0px 0px' display={'flex'} flexFlow={'row wrap'} alignItems={'center'}>
                    <Text><strong>Trip rating: </strong></Text>
                    <Rating rate={props.rate}/>
                </CardFooter>
            </Card>
    )
}
export default CardComponent