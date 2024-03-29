import { Button, Container, Section, Text, Wrapper } from '../UIKit';

export default function Cta() {
  return (
    <Section py={[45, 80, 100]} px={[32, 60, 90]}>
      <Container
        display={['row', 'row', 'flex']}
        alignItems={['center']}
        justifyContent={['space-between']}
        width={[1]}
      >
        <Wrapper maxWidth={[500]} mt={[48, 48, 0]}>
          <Text size={['heading4', 'heading2', 'heading2']}>
            How about we make something awesome together?
          </Text>
        </Wrapper>
        <Wrapper
          display={['grid']}
          justifyItems={['flex-start']}
          gridGap={[24]}
          maxWidth={[500]}
        >
          <Text size='caption'>
          </Text>
          <Button href='/ABD ELAZIZ HAFALLAH Resume' variant='primary' download>Get In Touch</Button>
        </Wrapper>
      </Container>
    </Section>
  );
}
