import React from 'react'
import "@radix-ui/themes/styles.css";
import { Flex, Text, Button } from "@radix-ui/themes";

function App() {
  return (
    <div>
      <MyApp />
    </div>
  )
}

export default App



function MyApp() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}

