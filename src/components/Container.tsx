import { Box } from "@chakra-ui/react";

export default function Container({ ...rest }) {
    return (
        <Box maxW="1200px" mx="auto" {...rest} />
    );
}
