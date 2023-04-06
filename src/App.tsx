import * as React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"
import {
  ChakraProvider,
  theme,
  Flex,
  Container
} from "@chakra-ui/react"
import CardComponent from "./components/card/CardComponent"

interface ImageInterface {
  url: string
}

type Trip = {
  id: number;
  image: ImageInterface;
  title: string;
  countries: number;
  days: number;
  emissions: number;
  rate: number;
};

const App = () => {
  const [trips, setTrips] = useState<Trip[]>([])

  useEffect(() => {
    const getTrips = async () => {
        const { data, status } = await axios.get<Trip[]>(
          'https://api.mocki.io/v2/2d91ec60/trips'
        );
        console.log(typeof data)
        setTrips((prevState: any) => {console.log(prevState); return [...prevState, ...data]})
    }

    getTrips()
  }, [])
  
 console.log(trips)
  return (
    <ChakraProvider theme={theme} >
      <Container w='100%'  padding={0} maxWidth='100%' backgroundColor={'gray.200'}>
        <Flex alignItems='center' flexDirection={"row"} gap={4} paddingTop={'5%'} marginLeft={'5em'} >
          {
            trips && trips.map((trip: Trip) => 
              <CardComponent  
                key={trip.id} 
                {...trip}
              />
            )
          }
        </Flex>
      </Container>
    </ChakraProvider>

  )
}
export default App