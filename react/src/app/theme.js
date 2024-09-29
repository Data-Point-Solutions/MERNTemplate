import { extendTheme } from "@chakra-ui/react";
import MetallicButton from "../components/buttons/MetallicButton";

const theme = extendTheme({
    // Add custom theme options here

    components: {
        MetallicButton: {
            baseStyle: {
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -1px 1px rgba(0, 0, 0, 0.1)',
            },
        },
    },
});

export default theme;