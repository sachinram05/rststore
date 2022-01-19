import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
    const D = new Date().getFullYear().toString();
  return (
    <Flex as="footer" justifyContent="center" py="5">
      <Text>Copyright {D}.RST Store. All Right Reserved:</Text>
    </Flex>
  );
};
export default Footer;
