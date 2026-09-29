import {
  Container,
  Section,
  Text,
  Button,
  Wrapper,
  Frame,
} from '../../../components/UIKit';

export default function Hero() {
  return (
    <Section pt={[90, 100, 120]} px={[32, 60, 90]} pb={[32, 45, 0]}>
      <Container>
        <Text size={['heading3', 'heading1', 'hero']}>
          I love <span style={{ color: '#88888D' }}>what I do</span> and I make
          sure I do great work
          <span style={{ color: '#57EFB4' }}>.</span>
        </Text>
        <Frame bg={['steelGray']} width={[1]} height={[1]} my={[48]} />
        <Wrapper
          display={['flex']}
          flexDirection={['column', 'row', 'row']}
          alignItems={['center']}
          justifyContent={['space-between']}
        >
          <Button href='/ABD ELAZIZ HAFALLAH Resume.pdf' variant='primary' download>
            Contact Me
          </Button>
          <Wrapper maxWidth={[600]} mt={[24, 0, 0]}>
            <Text size={['body2', 'body', 'body']}>
              I build backend-heavy systems, APIs, and reliable product experiences with a focus on engineering quality, observability, and AI-assisted workflows.
            </Text>
          </Wrapper>
        </Wrapper>
      </Container>
    </Section>
  );
}
